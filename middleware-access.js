// middleware de acesso
// ele será usado para realizar uma autenticação

const express = require("express"); //  importando o express

const app = express(); // criando a aplicação

const PORT = 3000; // definindo a porta do servidor

app.use(express.json()); // nos permite interpretar JSON

function verificarAcesso(req, res, next) {


    const autorizado = true; // simulação de acesso
    //true: acesso liberado
    //false: acesso negado

    if (autorizado) {
        next(); // permite que a requisição continue
    } else {
        res.status(403).json({
            mensagem: "Acesso negado" 
        });
    };
};

// incluindo o Middleware na rota

app.get("/admin", verificarAcesso, (req, res) => {
    res.json({
        mensagem: "Àrea administrativa acessada!"
    });
});

app.listen(PORT, () => {
    console.log("Server Running on port http://localhost:3000");
}) 