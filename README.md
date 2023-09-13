# Documentação da API

Este é um projeto de API Node.js simples. Siga as instruções abaixo para baixar o projeto, instalar as dependências e iniciar o servidor.
<br />

<p align="center">
  <h3 align="center">API EXERCICIOS</h3>

  <p align="center">
    Um projeto para exemplo!
    <br />
  </p>
</p>

## Pré-requisitos

<h3>Certifique-se de ter o Node.js e o Git instalados em sua máquina.</h3>

1. Clone o repositório do Git em sua máquina local:

```bash
git clone https://github.com/gsperandio/Api-PUC-Pos.git
```

<br />

2. Instale as dependências do projeto:

```bash
npm install
```

<br />

3. Inicie o projeto:

```bash
node server.js
```

- Método HTTP: POST 📥
- Endpoint: `http://localhost:3000/datas`
- Parâmetros: Data inicial e Data final
- Resposta: Mostra a quantidade de dias, semanas e meses entre duas datas

Exemplo de requisição:

```json
{
  "dataInicio": "25/05/1997",
  "dataFim": "30/05/2023"
}
```

Exemplo de resposta:

```json
{
  "Dias": 9501,
  "Semanas": 1357,
  "Meses": 312
}
```

<br />

- Método HTTP: POST 📥
- Endpoint: `http://localhost:3000/crescente`
- Parâmetros: Numeros separados por ; ; ; ; ; ;
- Resposta: Organiza os números de forma crescente

Exemplo de requisição:

```json
{
  "numeros": "273;189;742;416;598;88;33;725;127;355;681;444;56;921;312"
}
```

Exemplo de resposta:

```json
{
  "numerosOrdenados": [
    33, 56, 88, 127, 189, 273, 312, 355, 416, 444, 598, 681, 725, 742, 921
  ]
}
```

<br />

- Método HTTP: POST 📥
- Endpoint: `http://localhost:3000/decrescente`
- Parâmetros: Numeros separados por ; ; ; ; ; ;
- Resposta: Organiza os números de forma decrescente

Exemplo de requisição:

```json
{
  "numeros": "273;189;742;416;598;88;33;725;127;355;681;444;56;921;312"
}
```

Exemplo de resposta:

```json
{
  "numerosOrdenados": [
    921, 742, 725, 681, 598, 444, 416, 355, 312, 273, 189, 127, 88, 56, 33
  ]
}
```

<br />

- Método HTTP: POST 📥
- Endpoint: `http://localhost:3000/pares`
- Parâmetros: Numeros separados por ; ; ; ; ; ;
- Resposta: Exibe apenas números pares

Exemplo de requisição:

```json
{
  "numeros": "273;189;742;416;598;88;33;725;127;355;681;444;56;921;312"
}
```

Exemplo de resposta:

```json
{
  "numerosPares": [742, 416, 598, 88, 444, 56, 312]
}
```

<br />

- Método HTTP: POST 📥
- Endpoint: `http://localhost:3000/mimificator`
- Parâmetros: Qualquer frase que desejar
- Resposta: Exibe uma frase sem as vogais 'A E O U'

Exemplo de requisição:

```json
{
  "mimimi": "Hoje eu não vou estudar"
}
```

Exemplo de resposta:

```json
{
"mimificado": "hiji ii nãi vii istidir"
}
```

<br />
