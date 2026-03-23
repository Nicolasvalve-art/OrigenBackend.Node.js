import { Router } from "express";
import {
    listarUsuario,
    ObtenerUsuario,
    CrearUsuario,
    ActualizarUsuario,
    EliminarUsuario,
    
} from '../controllers/controller.usuario.js';

const router = Router();


router.get('/usuarios', listarUsuario);
router.get('/usuarios/:id', ObtenerUsuario);
router.post('/usuarios', CrearUsuario);
router.put('/usuarios/:id', ActualizarUsuario);
router.delete('/usuarios/:id', EliminarUsuario);

export default router;