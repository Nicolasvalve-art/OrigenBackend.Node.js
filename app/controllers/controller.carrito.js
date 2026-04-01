import pool from "../config/db.js";

// LISTAR TODOS LOS CARRITOS
export const listarCarrito = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM carrito");
        res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al listar carrito" });
    }
};

// OBTENER UN CARRITO POR ID
export const obtenerCarrito = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM carrito WHERE id_carrito = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }

        res.json(rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener carrito" });
    }
};

// CREAR CARRITO
export const crearCarrito = async (req, res) => {
    try {
        const { id_usuario, fecha_creacion, cantidad, id_producto } = req.body;

        const [result] = await pool.query(
            "INSERT INTO carrito (id_usuario, fecha_creacion, cantidad, id_producto) VALUES (?, ?, ?, ?)",
            [id_usuario, fecha_creacion, cantidad, id_producto]
        );

        res.status(201).json({
            message: "Carrito creado",
            id: result.insertId
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear carrito" });
    }
};

// ACTUALIZAR CARRITO
export const actualizarCarrito = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_usuario, fecha_creacion, cantidad, id_producto } = req.body;

        const [result] = await pool.query(
            "UPDATE carrito SET id_usuario = ?, fecha_creacion = ?, cantidad = ?, id_producto = ? WHERE id_carrito = ?",
            [id_usuario, fecha_creacion, cantidad, id_producto, id]
        );

        res.json({ message: "Carrito actualizado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar carrito" });
    }
};

// ELIMINAR CARRITO
export const eliminarCarrito = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(
            "DELETE FROM carrito WHERE id_carrito = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }

        res.json({ message: "Carrito eliminado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar carrito" });
    }
};