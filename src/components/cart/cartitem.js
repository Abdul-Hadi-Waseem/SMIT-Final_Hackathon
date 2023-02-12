import React, { useState } from 'react'
import { useSelector } from 'react-redux';



const Cartitem = () => {
  const arr  =  [1,2]
  const initVal = useSelector((state)=>state.cart)
  
  console.log(initVal)


  const list = initVal?.map((currentEl,index)=>{
    return(
      <div key={index} >
          <div  >
                <div className="card rounded-3 mb-4">
                        <div className="card-body p-4">
                          <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img  className="img-fluid rounded-3" alt="Cotton T-shirt" />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <p className="lead fw-normal mb-2">{}</p>
                              <p><span className="text-muted">{}</span></p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="mb-0">{}</h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <button className='btn btn-danger'  >-</button>
                            </div>
                          </div>
                        </div>
                   </div>
            </div>
    </div>

    )

  })



    return (
    <>
    {list}
    </>
  )
}

export default Cartitem;