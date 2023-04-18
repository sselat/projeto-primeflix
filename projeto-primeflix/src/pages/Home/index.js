import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'

// movie/550?api_key=3865179eb23043011930a51996b0312b

function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '3865179eb23043011930a51996b0312b',
          language: 'pt-BR',
          page: 1
        }
      })

      setFilmes(response.data.results.slice(0, 10))
      setLoading(false)
    }

    loadFilmes()
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <h2>Carregando filmes ...</h2>
      </div>
    )
  }
    return (
      <div className='container'>
        <div className='lista-filmes'>
          {filmes.map((filme) => {
            return (
              <article className='container-filmes' key={filme.id}>
                <strong>{filme.title}</strong>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                <Link to={`/filme/${filme.id}`}>Ver mais detalhes</Link>
              </article>
            )
          })}
        </div>
      </div>
    )
  }

export default Home