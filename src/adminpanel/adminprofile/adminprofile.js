import React from 'react'
import Navigation from '../navbar/adminNavbar'



export default function Adminprofile() {
  return (
    <div>
        <Navigation/>
        <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label>salman imran</div>
                <div className="col-md-6"><label className="labels">Surname</label>shamsi</div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Mobile Number</label>03083887174</div>
                <div className="col-md-12"><label className="labels">Email ID</label>shamsisalman81@gmail.com</div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><label className="labels">Country</label>pakistan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

