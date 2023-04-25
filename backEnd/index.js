const express = require('express');
const app = express();
const fs = require('fs');

app.get('/dados', (req, res) => {
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao ler o arquivo data.json');
      return;
    }

    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
