import React, { useEffect,useState } from 'react'
import { db } from '../../components/firebaseConfig';
import { collection, getDocs,doc,query, where, onSnapshot } from "firebase/firestore";
import {  } from "firebase/firestore"; 
import { async } from '@firebase/util';


        

const Additem = () => {

    // get data from firebase

    const [data,setData] = useState([]);


    useEffect(()=>{
    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
        setData((prev)=>{return [...prev,doc.data()]})
        });
    };
    getData()
    },[])

    console.log(data)

  return (
    <div>
        <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">Basic T-shirt</p>
                      <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i className="fas fa-minus" />
                      </button>
                      <input id="form1" min={0} name="quantity" defaultValue={2} type="number" className="form-control form-control-sm" />
                      <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">$499.00</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" /></a>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Additem