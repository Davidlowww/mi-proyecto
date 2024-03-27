import React from 'react'

function Propietarios(props){
    const {Propietarios, onAddToCart} = props

  return (
<div className='Propietarios'>
<h3>{Propietarios.nombre}</h3>
<img src={Propietarios.image} alt={Propietarios.nombre}/>
<p>precio: ${Propietarios.precio}</p>
<button onClick={() => onAddToCart(Propietarios)}>Agregar al carrito</button>
</div>
  )
}

export default Propietarios;
