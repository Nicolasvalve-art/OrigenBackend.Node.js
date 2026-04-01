import express from 'express';
import cors from 'cors';
import routerUsuario from './app/routes/routes.usuario.js';
import routerCarrito from './app/routes/routes.carrito.js';

const app = express();

app.use(cors());
app.use(express.json());

// RUTAS
app.use('/api', routerUsuario);
app.use('/api', routerCarrito);

app.get('/', (req, res) => {
    res.send('FUNCIONA');
});

app.listen(3000, () => {
    console.log('Servidor corriendo');
});

