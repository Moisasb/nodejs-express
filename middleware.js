const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());


app.get("/produtos/", (req, res) => {
    res.json({
        mensagem: "Middleware utilizado"
    });
});

// utilizando middleware
function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
};

app.use(logger);

// porta definida para iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor funcnionando em http://localhost:${PORT}`);
});