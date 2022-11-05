let producto = parseInt(
    prompt(
      'Elegí el producto que te gustaría comprar: 1.Pañales - 2.Mamadera - 3.Cuna - 4.Mameluco'
    )
  )
  let seguirComprando = true
  let totalCompra = 0
  let decision


const productosArray = []


class productoNuevo{
  constructor(codigo,nombre,precio,disponibles){
    this.codigo = codigo
    this.nombre = nombre;
    this.precio = precio;
    this.disponibles = disponibles;
  }
}
const pañales = new productoNuevo(1,'Pañales',600,104);
productosArray.push(pañales);
const mamadera = new productoNuevo(2,'Mamadera',1000,200);
productosArray.push(mamadera);
const cuna = new productoNuevo(3,'Cuna',200,23);
productosArray.push(cuna);
const mameluco = new productoNuevo(4,'Mameluco',800,18);
productosArray.push(mameluco);

console.log(productosArray)




  while (seguirComprando === true) {
    if (producto === pañales.codigo) {
      totalCompra = totalCompra + pañales.precio
      pañales.disponibles = pañales.disponibles - 1
    } else if (mamadera.codigo) {
      totalCompra = totalCompra + mamadera.precio
      mamadera.disponibles = mamadera.disponibles - 1
    } else if (producto === cuna.codigo) {
      totalCompra = totalCompra + cuna.precio
      cuna.disponibles = cuna.disponibles - 1
    } else if (producto === mameluco.codigo) {
      totalCompra = totalCompra + mameluco.precio
      mameluco.disponibles = mameluco.disponibles - 1
    }


    decision = parseInt(prompt('¿Querés seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
      producto = parseInt(
        prompt(
            'Elegí el producto que te gustaría comprar: 1.Pañales - 2.Mamadera - 3.Cuna - 4.Mameluco'
        )
      )
    } else {
      seguirComprando = false
    }
  }
  alert(`El total de tu compra es ${totalCompra}`)

  const totalCompraDescuento = descuento(totalCompra)
  alert(`Por haber comprado hoy, recibis un descuento. El total de tu compra con el descuento es de ${totalCompraDescuento}.`)

  
  function descuento(valor) {
    let descuento = 0
    if (valor <= 1000) {
      descuento = 5
    } else if (valor > 1000 && valor <= 2000) {
      descuento = 10
    } else {
      descuento = 15
    }
  
    let valorDescuento = valor * (descuento / 100)
    let valorFinal = valor - valorDescuento
    return valorFinal
  }


