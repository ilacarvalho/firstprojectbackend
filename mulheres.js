const express = require("express")
const router = express.Router ()

const app = express ()
const porta = 3333
const mulheres = [

    {
        nome: 'Simara Conceicao',
        imagem: 'https://blogdaatlas.com/wp-content/uploads/2022/09/mulheres-na-tech-1.jpg',
        minibio: 'Desenvolvedora e instrutora' 
    },

    {
        nome: 'Camila Carvalho',
        imagem: 'https://img.ibxk.com.br/2022/03/22/mulheres-na-tecnologia-22110352908174.jpg?ims=328x',
        minibio: 'desenvolvedora em formacao'
    },

    {
        nome: 'Patricia Ramos',
        imagem: 'https://img.ibxk.com.br/2022/03/22/mulheres-na-tecnologia-22110352908174.jpg?ims=328x',
        minibio: 'influencer digital e comediante'
    }
]


function mostraMulheres(request, response) {
        response.json(mulheres)
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen (porta, mostraPorta)