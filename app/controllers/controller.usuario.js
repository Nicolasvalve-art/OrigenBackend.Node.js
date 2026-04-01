import pool from "../config/db.js";


export const listarUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM usuario");
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al listar usuarios" });
    }
};


export const ObtenerUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM usuario WHERE id_usuario = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json(rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener usuario" });
    }
};


export const CrearUsuario = async (req, res) => {
    try {
        const { nombre, correo, password, telefono, direccion } = req.body;

        const [result] = await pool.query(
            "INSERT INTO usuario (nombre, correo, password, telefono, direccion) VALUES (?, ?, ?, ?, ?)",
            [nombre, correo, password, telefono, direccion]
        );

        res.status(201).json({
            message: "Usuario creado",
            id: result.insertId
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear usuario" });
    }
};


export const ActualizarUsuario = async (req, res) => {
   

    try {
        const { id } = req.params;
        
        console.log("BODY RECIBIDO:", req.body); 

        const { nombre, correo, password, telefono, direccion } = req.body;

        const [result] = await pool.query(
            "UPDATE usuario SET nombre = ?, correo = ?, password = ?, telefono = ?, direccion = ? WHERE id_usuario = ?",
            [nombre, correo, password, telefono, direccion, id]
        );

        console.log("RESULTADO SQL:", result);
        res.json({ message: "Usuario actualizado" });
    } catch (error) {
        console.error("ERROR EN EL CONTROLADOR:", error);
        res.status(500).json({ message: "Error interno" });
    }
};





export const EliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(
            "DELETE FROM usuario WHERE id_usuario = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar usuario" });
    }
};

export const loginUsuario = async (req, res) => {
    try {
        const { correo, password } = req.body;
        const [rows] = await pool.query(
            "SELECT id_usuario, nombre, rol FROM usuario WHERE correo = ? AND password = ?",
            [correo, password]
        );

        if (rows.length > 0) {
            
            res.json({ 
                message: "OK", 
                rol: rows[0].rol, 
                nombre: rows[0].nombre 
            });
        } else {
            res.status(401).json({ message: "Datos incorrectos" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};


