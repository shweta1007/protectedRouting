import React from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const Edit = () => {
    const location = useLocation()
    console.log(location.state.productData)
  return (
      <div className="Auth-form-container">
          <form className="Auth-form">
              <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="text-center">
                      Already registered?{" "}
                      <span className="link-primary" >
                          Sign In
                      </span>
                  </div>
                  <div className="form-group mt-3">
                      <label>Name</label>
                      <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter name"
                      />
                  </div>
                  <div className="form-group mt-3">
                      <label>Email</label>
                      <input
                          type="email"
                          className="form-control mt-1"
                          placeholder="Enter email"
                      />
                  </div>
                  <div className="form-group mt-3">
                      <label>Password</label>
                      <input
                          type="password"
                          className="form-control mt-1"
                          placeholder="Password"
                      />
                  </div>
                  <div className="form-group mt-3">
                      <label>Address</label>
                      <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter address"
                      />
                  </div>
                  <div className="form-group mt-3">
                      <label>Mobile</label>
                      <input
                          type="number"
                          className="form-control mt-1"
                          placeholder="Enter number"
                      />
                  </div>
                  <div className="form-group mt-3">
                      <label>Terms & Conditions</label>
                      <input type="checkbox" className="condition" />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary">
                          Submit
                      </button>
                  </div>
              </div>
          </form>
      </div>
      )
}

export default Edit