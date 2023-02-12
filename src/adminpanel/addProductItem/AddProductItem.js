import React from 'react'
import Navigation from '../navbar/adminNavbar'
import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../components/firebaseConfig';
import { async } from '@firebase/util';


const AddItem = () => {

  const [item,setItem]  = useState({
    file:null,
    prodName:"",
    prodCatg:"",
    prodDisc:"",
    unitName:"",
    unitPrice:"" 
  });

      const setData = async () => { 

        try {
          const docRef = await addDoc(collection(db, "products"), {
            file: item.file,
            prodName:item.prodName,
            prodCatg:item.prodCatg,
            prodDisc:item.prodDisc,
            unitName:item.unitName,
            unitPrice:item.unitPrice 
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

      } 



    const onClickHandler = (e) => {
      e.preventDefault();
        setData()
    }

const onFilehandler = (e) => {
      e.preventDefault();
      item.file = e.target.value;
  }
const onProdNamehandler = (e) => {
    e.preventDefault();
    item.prodName = e.target.value;
}
const onProdCatghandler = (e) => {
  e.preventDefault();
  item.prodCatg = e.target.value;
}
const onProdDischandler = (e) => {
  e.preventDefault();
  item.prodDisc = e.target.value;
}
const onUnitNamehandler = (e) => {
  e.preventDefault();
  item.unitName = e.target.value;
}
const onUnitPricehandler = (e) => {
  e.preventDefault();
  item.unitPrice = e.target.value;
}
 
  return (
    <div>
        <Navigation/>
        <section className="h-100" style={{backgroundColor: '#eee'}}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Add New Item</h3>
              </div>
                
        <form>
        {/* file input */}
        <div className="form-outline mb-4" >
        <label htmlFor="formFileDisabled" className="form-label"></label>
        <input className="form-control" type="file"  onChange={onFilehandler} />
        </div>
        {/* Text input */}
        <div className="form-outline mb-4">
          <input type="text" id="form6Example3" className="form-control" onChange={onProdNamehandler}  />
          <label className="form-label" htmlFor="form6Example3">Product name</label>
        </div>
        {/* Text input */}
        <div className="form-outline mb-4">
          <input type="text" id="form6Example4" className="form-control" onChange={onProdCatghandler}  />
          <label className="form-label" htmlFor="form6Example4">Product catagory</label>
        </div>
        {/* disc input */}
        <div className="form-outline mb-4">
          <textarea className="form-control" id="form6Example7" rows={4} defaultValue={""} onChange={onProdDischandler}  />
          <label className="form-label" htmlFor="form6Example7">product discription</label>
        </div>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example1" className="form-control" onChange={onUnitNamehandler} />
              <label className="form-label" htmlFor="form6Example1">Unit name</label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example2" className="form-control" onChange={onUnitPricehandler} />
              <label className="form-label" htmlFor="form6Example2">Unit Price</label>
            </div>
          </div>
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-success btn-block mb-4" onClick={onClickHandler} >Add Product</button>
        </form>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddItem