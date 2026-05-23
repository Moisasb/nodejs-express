const express = require('express'); // importanto o express

const app = express(); // criação da aplicação

const PORT = 3000; // definindo a porta do servidor

app.use(express.json()); // permite interpretar o JSON

function logger(req, res, next) { // middleware de log
    console.log(req.method) // exibe o método e a url acessada
    next(); // continua a execução
};
app.use(logger); // aplica o middleware em todas as rotas

// Middleware de validação de senha
function verificarAcesso(req, res, next) {
    const senha = req.query.senha // 
    if (senha === '1234') {
        next();
    } else {
        res.status(403).json({
            mensagem: 'Acesso negado, senha incorreta!'
        });
    }
};

// 
let produtos = [
    { id: 1, nome: 'Notebook', preco: 7500 },
    { id: 2, nome: 'Mouse', preco: 80 }
];

// rota inicial
app.get("/", (req, res) => {
    res.end("Servidor Express funcionando!")
});

// busca de produtos
app.get("/produtos", (req, res) => {
    res.json({
        ListadeProdutos: produtos,
    });
});


// cadastrar um novo produto
//  busca de produto pelo id da URL
app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        mensagem: "Produto encontrado",
        id: produtos[id - 1]
    })
})

app.post("/produtos", (req, res) => {
    const novoProduto = req.body; // captura dos dados enviados no body da requisição
    produtos.push(novoProduto); // envia o novo produto para o array de produtos

    res.json({
        mensagem: "Produto cadastrado com sucesso!",
        produto: novoProduto
    });
});


// atualizar um produto existente
app.put("/produtos", (req, res) => {
    const dadosAtualizados = req.body;

    produtos = produtos.map(produto => {

        if (produto.id === dadosAtualizados.id) {
            return {
                ...produto,
                preco: dadosAtualizados.preco
            };
        }
        return produto;
    });

    res.json({
        ListadeProdutos: produtos
    });
});

//deletar um produto existente
app.delete("/produtos", (req, res) => {
    const produtoDeletado = req.body;
    
    const produto = produtos.findIndex(produto => produto.id === produtoDeletado.id);
    
    if (produto -1) {
        produtos.splice(produto, 1);
        res.json({
            mensagem: "Produto deletado",
            ListadeProdutos: produtos
        });
    }
});

// rota protegida

app.get("/admin", verificarAcesso, (req, res) => {
    res.json({
        mensagem: "area administrativa acessada!"
    });

});
// declarando a porta do servidor 
app.listen(PORT, () => {
    console.log(`server runnig in port http://localhost:3000`)
});