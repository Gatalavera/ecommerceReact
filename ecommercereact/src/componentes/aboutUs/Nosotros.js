import React from 'react'

const Nosotros = () => {
  return (
    <div style={{marginBottom: '400px'}}>
    <div style={{display: 'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap: '1rem'}}>
        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Carlos</h2>
            <p><a style={{color: 'yellow'}} href='#'>Linkedin</a></p>
        </div>
        <div style={{width: '200px', borderRadius: '10px',textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Daniel</h2>
            <p><a style={{color: 'yellow'}} href='#'>Linkedin</a></p>
        </div>
        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Eduardo</h2>
            <p><a style={{color: 'yellow'}} href='#'>Linkedin</a></p>
        </div>
        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Gaston</h2>
            <p><a style={{color: 'yellow'}} href='#'>Linkedin</a></p>
        </div>
        <div style={{width: '200px', borderRadius: '10px', textAlign:'center',marginBottom:'50px', marginTop:'150px', backgroundColor:'#08a05c', color:'white'}}>
            <h2>Mariano</h2>
            <p><a style={{color: 'yellow'}} href='#'>Linkedin</a></p>
        </div>
    </div>
    </div>
  )
}

export default Nosotros