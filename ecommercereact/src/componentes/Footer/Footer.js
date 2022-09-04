import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
         <div id='bg' className="row w-100 p-3 m-0 text-white">
      <div className="col-lg12 col-md-6 col-lg-3">
        <p className="h3">Zapatillas</p>
        
      </div>
      <div className="col-lg12 col-md-6 col-lg-3">
        <p className="h5 mb-3">Sport Accessories</p>
        
        <div className="mb-2"><Link to='/Nosotros' className="text-white text-decoration-none">Quienes Somos</Link></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="#">Sucursales</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="#">Terminos y Condiciones</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="#">Politicas de Privacidad</a></div>
        
      </div>
      <div className="col-lg12 col-md-6 col-lg-3">
        <p className="h5 mb-3">¿Necesitas Ayuda?</p>
        
        <div className="mb-2"><a className="text-white text-decoration-none" href="#">Preguntas Frecuentes</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="#">Formas de Envio</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="#">Cambios</a></div>
        <div className="mb-2"><a className="text-white text-decoration-none" href="#">Botón de Arrepentimiento</a></div>
        <div clasNames="mb-2"><a className="text-white text-decoration-none" href="#">Ventas Corporativas</a></div>
      </div>
      <div className="col-lg12 col-md-6 col-lg-3">
        <p className=" d-flex h5 mb-3">Contacto</p>
        
        <div className='d-flex justify-content-between'>
        <div className="mb-2"><a href='#' id='in'><i className="bi bi-instagram"></i></a></div>
        <div className="mb-2"><a href='#' id='fb'><i className="bi bi-facebook"></i></a></div>
        <div className="mb-2"><a href='#' id='tw'><i className="bi bi-twitter"></i></a></div>
        <div className="mb-2"><a href='#' id='wa'><i className="bi bi-whatsapp"></i></a></div>
        </div>
      </div>
    </div>
  )
}

export default Footer