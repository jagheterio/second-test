const express = require('express');
const app = express(); 
const pokemonJson = require('./pokemon.json');

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/pokemon', (req, res, next) =>{
    console.log(req.query.search); 
    const filteredList = pokemonJson.filter((pokemonItem)=>{
        return pokemonItem.name.english.toLowerCase().includes(req.query.search.toLowerCase())
    });
    res.send(filteredList);
   
    // res.send( pokemonJson.filter((pokemonItem)=>{
    //     return pokemonItem.name.english.toLowerCase().includes(req.query.search.toLowerCase())
    // }));
})


const port = 3001;
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`)
})
