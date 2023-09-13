const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/datas', (req, res) => {
  const { dataInicio, dataFim } = req.body;

  if (!dataInicio || !dataFim) {
    return res.status(400).json({ error: 'Por favor, forneça ambas as datas.' });
  }

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day); // Mês - 1 porque os meses em JavaScript são baseados em zero (janeiro é 0)
  };

  const dataInicioObj = parseDate(dataInicio);
  const dataFimObj = parseDate(dataFim);

  if (isNaN(dataInicioObj) || isNaN(dataFimObj)) {
    return res.status(400).json({ error: 'Datas inválidas.' });
  }


  const diffEmMilissegundos = dataFimObj - dataInicioObj;
  const Dias = Math.floor(diffEmMilissegundos / (1000 * 60 * 60 * 24));
  const Semanas = Math.floor(Dias / 7);
  const Meses = (dataFimObj.getFullYear() - dataInicioObj.getFullYear()) * 12 + (dataFimObj.getMonth() - dataInicioObj.getMonth());

  res.json({
    Dias,
    Semanas,
    Meses,
  });
});

app.post('/crescente', (req, res) => {
  const { numeros } = req.body;

  if (!numeros) {
    return res.status(400).json({ error: 'Por favor, forneça números separados por ;' });
  }

  const numerosArray = numeros.split(';').map(Number);
  const numerosOrdenados = numerosArray.sort((a, b) => a - b);

  res.json({ numerosOrdenados });
});

app.post('/decrescente', (req, res) => {
  const { numeros } = req.body;

  if (!numeros) {
    return res.status(400).json({ error: 'Por favor, forneça números separados por ;.' });
  }

  const numerosArray = numeros.split(';').map(Number);
  const numerosOrdenados = numerosArray.sort((a, b) => b - a);

  res.json({ numerosOrdenados });
});

app.post('/pares', (req, res) => {
  const { numeros } = req.body;

  if (!numeros) {
    return res.status(400).json({ error: 'Por favor, forneça números separados por ;.' });
  }

  const numerosArray = numeros.split(';').map(Number);
  const numerosPares = numerosArray.filter((numero) => numero % 2 === 0);

  res.json({ numerosPares });
});


app.post('/mimificator', (req, res) => {
  const { mimimi } = req.body;

  if (!mimimi) {
    return res.status(400).json({ error: 'Por favor, forneça uma string.' });
  }
  
  const mimificado = mimimi.toLowerCase().replaceAll(/[aeou]/g, 'i');
  

  res.json({ mimificado });
});

app.listen(port, () => {
  console.log(`--------------------------`);
  console.log(`Bem Vindo a API de exercicios do professor Mark`);
  console.log(`--------------------------`);
  console.log(`\n`);
  console.log(`--------------------------`);
  console.log(`Servidor rodando na porta LOCAL - http://localhost:${port}`);
  console.log(`--------------------------`);
  console.log(`\n`);
  console.log(`1 CHAMADA DA API----------------------------> /datas`);
  console.log(`Informe os seguintes dados________EXEMPLO`);
  console.log(`{`);
  console.log(`  "dataInicio": "25/05/1997",`);
  console.log(`  "dataFim": "30/05/2023"`);
  console.log(`}`);
  console.log(`___________________`);
  console.log(`\n`);
  console.log(`2 CHAMADA DA API----------------------------> /crescente`);
  console.log(`Informe os seguintes dados________EXEMPLO`);
  console.log(`{`);
  console.log(`  "numeros": "273;189;742;416;598;88;33;725;127;355;681;444;56;921;312" `);
  console.log(`}`);
  console.log(`___________________`);
  console.log(`\n`);
  console.log(`3 CHAMADA DA API----------------------------> /decrescente`);
  console.log(`Informe os seguintes dados________EXEMPLO`);
  console.log(`{`);
  console.log(`  "numeros": "273;189;742;416;598;88;33;725;127;355;681;444;56;921;312" `);
  console.log(`}`);
  console.log(`___________________`);
  console.log(`\n`);
  console.log(`4 CHAMADA DA API----------------------------> /pares`);
  console.log(`Informe os seguintes dados________EXEMPLO`);
  console.log(`{`);
  console.log(`  "numeros": "273;189;742;416;598;88;33;725;127;355;681;444;56;921;312" `);
  console.log(`}`);
  console.log(`___________________`);
  console.log(`\n`);
  console.log(`5 CHAMADA DA API----------------------------> /mimificator`);
  console.log(`Informe os seguintes dados________EXEMPLO`);
  console.log(`{`);
  console.log(`  "mimimi": "Hoje eu não vou estudar" `);
  console.log(`}`);
  console.log(`___________________`);
});
