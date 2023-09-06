import { Router } from "express";
import { crearProducto, editarProducto, listarProductos } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/producto').get(listarProductos).post(crearProducto);
router.route('/producto/:id').put(editarProducto);


export default router;