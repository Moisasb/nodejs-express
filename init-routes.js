// rotas no Express

// formatação de rota + metodo com o Express:
// app.metodo ("caminho", função)
// onde:
// app -> aplicação express
// metodo -> tipo da requisição http (get, post, put, delete)
// caminho - > rota
// função -> o que srá executado quando a rota for acessada

const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

// metodo get com rotas de produtos e usuarios
app.get("/produtos", (req, res) => {
    res.json([
        { id: 1, nome: "Notbook", preco: 5000 },
        { id: 2, nome: "Mouse", preco: 50 }
    ]);
});

app.get("/usuarios", (res, req) => {
    res.json([
        { id: 1, nome: "Fernanda" },
        { id: 2, nome: "Luana" }
    ]);
});

// metodo POST com rota de produtos
app.post("/produtos", (req, res) => {
    const novoProduto = req.body;
    res.json({
        mensagem: "Produto cadastrado com sucesso!",
        produto: novoProduto
    });
});


// metodo PUT ´para a rota prodoutos
app.put("/produtos/:id", (req, res) => {
   // captura o ID da requisição
    const id = req.params.id;

    const dadosAtualizado = req.body;

    res.json({
        mensagem: "Produto atualizado com sucesso!",
        id: id,
        dados: dadosAtualizado
    })
});

// metodo delete para a rota produtos
app.delete("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        mensagem: "Produto removido com sucesso!",
        id: id
    });
});


// porta definida para iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor funcnionando em http://localhost:${PORT}`);
});