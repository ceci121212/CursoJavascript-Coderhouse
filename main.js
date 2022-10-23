let producto = parseInt(
    prompt(
      'Elegí el producto que te gustaría comprar: 1.Pañales - 2.Mamadera - 3.Cuna - 4.Mameluco'
    )
  )
  let seguirComprando = true
  let totalCompra = 0
  let decision
  while (seguirComprando === true) {
    if (producto === 1) {
      totalCompra = totalCompra + 1000
    } else if (producto === 2) {
      totalCompra = totalCompra + 500
    } else if (producto === 3) {
      totalCompra = totalCompra + 4000
    } else if (producto === 4) {
      totalCompra = totalCompra + 700
    }
  
    decision = parseInt(prompt('¿Querés seguir comprano? 1.Si - 2.No'))
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


