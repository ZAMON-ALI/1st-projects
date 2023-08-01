import React from 'react'

 function SignUp() {
  return (
  <>
  
  <form>
        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Sign up</label>
          <input style={{ width: "250px" }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />              <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
            <input style={{ width: "250px" }} type="text" className="form-control" id="exampleInputPassword1" />
            <label htmlFor="exampleInputPassword1" className="form-label">Father name</label>
            <input style={{ width: "250px" }} type="text" className="form-control" id="exampleInputPassword1" />
            <label htmlFor="exampleInputPassword1" className="form-label">Pasward</label>
            <input style={{ width: "250px" }} type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
            {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
  </>
  )
}
export  default SignUp;