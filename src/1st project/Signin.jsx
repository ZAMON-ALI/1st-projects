import React from 'react'
function SignIn() {
  return (
    <>

      <div className='contaianer mt-5'>
        <form>
          <div className="mb-3 mt-5">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input style={{ width: "250px" }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input style={{ width: "250px" }} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
              {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>





    </>
  )
}
export default SignIn;