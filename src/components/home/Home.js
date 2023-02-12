import React, { useEffect } from 'react'
import { useState } from 'react'
import { doc, addDoc,collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import { async } from '@firebase/util';
import Item from './item';
import "./style.css"
import Navbar from '../navbar/navbar';
import Slider from "../carasoul/slider"
import Products from '../cart/product';

const Home = () => {

     
  return (
    <>  
    <Navbar/>
    <Slider/>
      <section className="vh-100" style={{backgroundColor: '#878787'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: '15px'}}>
                <div className="card-body p-5">
                  <form className="d-flex justify-content-center align-items-center mb-4">
                    <div className="form-outline flex-fill">

                    </div>

                  </form>
                  <ul className="list-group mb-0">
                    <Products/> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home