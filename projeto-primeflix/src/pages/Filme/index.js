import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './filme.css'
import { toast } from 'react-toastify'

function Filme(){
  const {id} = useParams()
  const navigate = useNavigate()

  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '3865179eb23043011930a51996b0312b',
          language: 'pt-BR'
        }
      })
      .then((response) => {
        setFilme(response.data)
        setLoading(false)
      })
      .catch(() => {
        navigate('/', { replace: true })
        return
      })

    }
    loadFilme()

    return () => {
      console.log('COMPONENTE FOI DESMONTADO!')
    }
  }, [navigate, id])

  function salvarFilme() {
    const minhaLista = localStorage.getItem('@primeflix')

    let filmesSalvos = JSON.parse(minhaLista) || []

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

    if(hasFilme){
      toast.warn('Esse filme já está na lista!')
      return
    }

    filmesSalvos.push(filme)
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
    toast.success('Filme salvo com sucesso!')
  }
  if(loading){
    return(
      <div className='filme-info'>
        <h1>Carregando detalhes ...</h1>
      </div>
    )
  }
  return(
    <div className='filme-info'>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

      <div className='area-btn'>
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${filme.title} trailer`} target='blank' rel='external'>Trailer</a>
        </button>
      </div>
    </div>
  )
}

export default Filme