// Primeiros passos apara a criação de im servidor com express:
// abrir o terminal e dar os seguintes comandos:
// npm init -y (para inicializar o npm e criar o package.json)
// npm install express (para instalação das depenências do framework express)

// Importanda a biblioteca Express para o projeto:
const express = require("express");

// Cria a aplicação do express
const app = express();

const PORT = 3000; // Porta onde o servidor irá rodar

// Middleware nativo do Express que premite a nossa aplicação interpretar dados enviado ao JSON.
app.use(express.json());

// Criação de uma rota com metodo GET
app.get("/", (req, res) => {
    res.send("Servidor express funcionando!");
});

// porta definida para iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor funcnionando em http://localhost:${PORT}`);
});