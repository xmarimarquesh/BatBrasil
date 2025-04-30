// npm i prisma @prisma/client -D
// npx prisma init --datasource-provider mysql
// npx prisma migrate dev
// npm run dev
import express from 'express';
import initRoutes from './routes/routes.js'

const app = express();
initRoutes(app)

const port = 8080;

app.get('/getTeste', (req, res) => {
    res.send('GET: Requisição recebida com sucesso!');
});

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));