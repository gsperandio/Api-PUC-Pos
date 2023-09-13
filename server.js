const express = require('express');
const app = express();
const port = 3000; // Escolha a porta que desejar

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});