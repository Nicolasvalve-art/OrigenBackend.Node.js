import { Router } from "express";
import {
    listarCarrito,
    obtenerCarrito,
    crearCarrito,
    actualizarCarrito,
    eliminarCarrito
} from "../controllers/controller.carrito.js";

const router = Router();

router.get('/carrito', listarCarrito);
router.get('/carrito/:id', obtenerCarrito);
router.post('/carrito', crearCarrito);
router.put('/carrito/:id', actualizarCarrito);
router.delete('/carrito/:id', eliminarCarrito);

export default router;