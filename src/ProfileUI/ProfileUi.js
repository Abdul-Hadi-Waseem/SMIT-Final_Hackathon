import React from 'react'
import Navbar from '../components/navbar/navbar';

const ProfileUi = () => {
  return (
    <div>
        <Navbar/>
        <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="./gg.jpeg" /><span className="font-weight-bold">ADMIN</span><span className="text-black-50">admin@test.com</span><span> </span></div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">ADMIN PROFILE</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label><br/>Test Admin</div>

              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Mobile Number</label><br/>090078601</div>
                <div className="col-md-12"><label className="labels">Email ID</label><br/>admin@test.com</div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><label className="labels">Country</label><br/>USA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUi