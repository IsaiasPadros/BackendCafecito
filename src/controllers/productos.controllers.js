import Producto from "../models/producto"

 

export const listarProductos= (req, res) =>{


try {
    // ir a la base de datos y pedir los productos
    res.send('esto es una pruebita')

} catch (error) {
    console.log(error)
}



}