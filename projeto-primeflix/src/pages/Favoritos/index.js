import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './favoritos.css'
import { toast } from 'react-toastify'
import {FaTrash, FaInfoCircle} from 'react-icons/fa'

function Favoritos() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem('@primeflix')

    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return (item.id !== id)
    })

    setFilmes(filtroFilmes)
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))

    toast.success('Excluído com sucesso!')
  }
  return (
    <div className='meus-filmes'>
      <h1>Meus filmes</h1>

      {filmes.length === 0 &&
        <div>
          <h3>Sem filmes cadastrados!</h3>
          <Link to={'/'} className='back-btn'>Voltar</Link>
        </div>
      }

      <ul>
        {filmes.map(item => {
          return (
            <li className='filme' key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}><FaInfoCircle className='info-icon'/></Link>
                <button onClick={() => excluirFilme(item.id)}><FaTrash className='trash-icon'/></button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos