import React from 'react'
import Navbar from '../navbar/navbar';
import CartForm from './cartForm';
import Cartitem from './cartitem';


const Cart = () => {
  return (
    <>
        <Navbar/>
        <section className="h-100" style={{backgroundColor: '#eee'}}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price<i className="fas fa-angle-down mt-1" /></a></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  Total Amount Rs :
                </div>
              </div>
              <br />
              <Cartitem/>
              <div className="">
              <CartForm/>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Cart