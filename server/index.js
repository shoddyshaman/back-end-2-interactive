const express = require('express')
const cors = require('cors')
// const movieController = require('./controller/movieController')
//bringing in the controller
const {
    getMovies,
    createMovie,
    deleteMovie,
    updateMovie
}  = require('./controller/movieController')

const app = express()

//top level middleware
app.use(express.json())
app.use(cors())


//endpoints
app.get('/api/movies', getMovies)
app.post('/api/movies', createMovie)
app.delete('/api/movies/:id', deleteMovie)
app.put('/api/movies/:id',updateMovie)

app.listen(4004, ()=> console.log('server running on port 4004'))
