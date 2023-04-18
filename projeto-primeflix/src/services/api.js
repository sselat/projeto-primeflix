import axios from 'axios'

// BASE_URL: https://api.themoviedb.org/3/
// URL: movie/550?api_key=3865179eb23043011930a51996b0312b

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api