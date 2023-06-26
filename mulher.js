const express = require("express")
const router = express.Router ()

const app = express ()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Camila Carvalho",
        imagem: "https://www.dicasdemulher.com.br/wp-content/uploads/2016/08/segredos-de-toda-mulher-elegante.jpg",
        minibio: "Gestora ambiental e Mestra em sustentabilidade pela Universidade de Sao Paulo"
    })
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta)
}
app.use(router.get("/mulher", mostraMulher))
app.listen (porta, mostraPorta)