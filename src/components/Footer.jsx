import React from 'react'
import {Link} from "react-router-dom"


function Footer() {
  return (
    <div style={{width:"100%",height:"300px",color:"white"}} className='d-flex justify-content-center align-items-center flex-column w-100 mt-5 bg-primary'>
    <div className='footer d-flex justify-content-evenly align-items-center w-100 mb-5'>
        <div className="website" style={{width:"400px"}}>
            <h4><i class="fa-solid fa-cart-shopping"></i>{' '} E-CART
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium eligendi deleniti placeat soluta. Est temporibus fugiat numquam iste laborum aliquam eum placeat dignissimos odit officiis. Fugiat repellat vero iusto!</p> 

        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-4'>Links</h4>
          <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Home page</Link>
          <Link to={'/Wishlist'}style={{textDecoration:"none",color:"white"}}>wishlist</Link>
          <Link to={'/Cart'}style={{textDecoration:"none",color:"white"}}>Cart</Link>


        </div>
        <div className="guides d-flex flex-column">
        <h4 className='mb-4'>Guides</h4>
        <Link to={'https://react.dev/'} style={{textDecoration:"none",color:"white"}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:"none",color:"white"}}>React bootsrap</Link>
          <Link to={'https://bootswatch.com/'}style={{textDecoration:"none",color:"white"}}>bootswatch</Link>

        </div>
        <div className="contact">
          <h4 className='mb-3'>Contact Us</h4>
          <div className='d-flex mb-4'>
            <input type='text' className='form-control' placeholder='Enter your email id'/>
            <button className='btn btn-warning text-white ms-2'>Subscribe</button>

          </div>
          <div className='icons d-flex justify-content-evenly'>
          <Link to={'https://react.dev/'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-twitter fa-2x"></i> </Link>
          <Link to={'https://bootswatch.com/'}style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-facebook fa-2x"></i></Link>


          </div>
        </div>
    </div>
    <p>veuyveuvcwuevcuvvbbakbx</p>

    
</div>
  )
}

export default Footer