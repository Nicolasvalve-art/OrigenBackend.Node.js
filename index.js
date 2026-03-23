import express from 'express';
import router from './app/routes/routes.usuario.js';

const app = express();

app.use('/api', router);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('FUNCIONA');
});

app.listen(3000, () => {
    console.log('Servidor corriendo');
});