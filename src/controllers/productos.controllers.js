
import Producto from "../models/producto.js"


export const listarProductos= async (req, res) =>{


try {
    // ir a la base de datos y pedir los productos
    const productos = await Producto.find();
    res.status(200).json(productos);

} catch (error) {
    console.log(error)
    res.status(404).json({
        mensaje: 'Error al buscar productos'
    })
}
}

export const crearProducto= async(req, res) =>{
try {
    // ir a la base de datos y pedir los productos
    //aqui los datos deberian estar validados
    console.log(req.body)
   
    const productoNuevo = new Producto(req.body);
    //guardar el productoNuevo en la base de datos
    await productoNuevo.save();
    res.status(201).json({
        mensaje:'El producto fue creado correctamente'
    })
} catch (error) {
    console.log(error);
    res.status(400).json({
        mensaje:'El producto no pudo ser creado'
    })
}
}

export const editarProducto= async(req, res) =>{
    try {
        // ir a la base de datos y pedir los productos
        //aqui los datos deberian estar validados
        //extraer el parametro ID de la ruta
        console.log(req.params.id)
        console.log(req.body)
       await Producto.findByIdAndUpdate(req.params.id,req.body)
        
        res.status(201).json({
            mensaje:'El producto fue creado correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje:'No se puede editar el producto'
        })
    }



}

export const borrarProducto= async(req, res) =>{
    try {
        // ir a la base de datos y pedir los productos
        //aqui los datos deberian estar validados
        //extraer el parametro ID de la ruta
        console.log(req.params.id)
        console.log(req.body)
       await Producto.findByIdAndDelete(req.params.id);
        res.status(201).json({
            mensaje:'El producto fue borrado correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje:'No se pudo eliminar el producto'
        })
    }
}

export const obtenerProducto= async(req, res) =>{
    try {
       
        const productoBuscado = await Producto.findById(req.params.id)
       
        res.status(200).json(productoBuscado)
    } catch (error) {
        //puedo agregar un IF en caso de obtener NULL, es el caso en el que el ID no tenga formato de MONGO.
        console.log(error);
        res.status(400).json({
            mensaje:'No se pudo obtener el producto'
        })
    }
}



