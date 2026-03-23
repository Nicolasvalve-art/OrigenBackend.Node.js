import pool from "../config/db.js";

// Listar usuarios
export const listarUsuario = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM usuario");
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al listar usuarios" });
    }
};

// Obtener usuario por ID
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

// Crear usuario
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

// Actualizar usuario
export const ActualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correo, password } = req.body;

        const [result] = await pool.query(
            "UPDATE usuario SET nombre = ?, correo = ?, contraseña = ? WHERE id_usuario = ?",
            [nombre, correo, password, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json({ message: "Usuario actualizado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar usuario" });
    }
};

// Eliminar usuario
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