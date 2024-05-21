import React, { useEffect } from "react";

const Login = () => {
  // const { isLoading: isDeleteLoading, mutateAsync: removeVehicleMutation } =
  //   useRemoveInventoryVehicleMutation();
    const printF = () => {
      console.log("1");
      console.log("2");
      setTimeout(() => {
        console.log("3");
      }, 0);
      setTimeout(() => {
        console.log("4")
      }, 100);;
      console.log("5")
    }
    useEffect(() => {
      printF()
    }, [])
    
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
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
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
           Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
