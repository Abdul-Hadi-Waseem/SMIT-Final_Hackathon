import React from 'react'
import { useState,useEffect } from 'react';
import { collection, getDocs, doc, onSnapshot , query,deleteDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { db } from '../firebaseConfig';
import "./style.css"


const Item = () => {

        

  return (
        <li  className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div className="d-flex align-items-center">
          <input className="form-check-input me-2" type="checkbox" />
        </div>
        <a data-mdb-toggle="tooltip" title="Remove item">
          <button className='btn btn-success
          
          '  >+</button>
        </a>
      </li>
      )
}

export default Item;