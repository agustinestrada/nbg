const express = require('express')
const app = express()
const PORT = 3020
const mainRouter = require('./routes/main')


app.set('view engine', 'ejs')
app.use(express.static('public'))



// Rutas

app.use('/main', mainRouter)

// Levantada del Servidor
app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})


