import React from 'react'
import { collection, getDocs} from 'firebase/firestore';
import { useState,useEffect } from 'react';
import { db } from '../firebaseConfig';
import { useSelector,useDispatch } from 'react-redux';
import { add } from '../../redux/cart/Cartslice';


const Products = () => {
  const [data,setData] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(()=>{

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
        setData((prev)=>{return [...prev,{id:doc.id, data:doc.data()}]})
        });
    };
    getData()
    },[])

  const onAddCartHandler = (product) => {
      dispatch(add(product));
  };

    const list = data.map((currentEl,index)=>{
        return (
            <div key={index} >
                <div className="card rounded-3 mb-4">
                        <div className="card-body p-4">
                          <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                             
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <p className="lead fw-normal mb-2">{currentEl.data.prodName}</p>
                              <p><span className="text-muted">{currentEl.data.prodDisc}</span></p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h5 className="mb-0">{`${currentEl.data.unitName}${currentEl.data.unitPrice}`}</h5>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <button className='btn btn-success' onClick={onAddCartHandler(currentEl.data)} >+</button>
                            </div>
                          </div>
                        </div>
                   </div>
            </div>
          )
    })
    return(
        <>
        {list}
        </>
    )

}

export default Products