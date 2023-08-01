import React, { useState } from 'react'
import SignIn from './Signin';
import SignUp from './SignUp';

function Home() {
    const [from, setFrom] = useState("SignIn");

    return (
        <>
            <div className="signin" style={{
                display: "flex",
                justifyContent: "space-around",
                //    width:"70px"

            }}>
                <div className="a mt-5">
                    <h2>Sign In To</h2>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <span>If you dont have an account register you can
                        {from=== "SignIn"?
                          <button onClick={
                            () => {
                                setFrom("SignUp")
                            }
                        }>SignUp</button>
                        :
                        <button onClick={
                          () => {
                              setFrom("SignIn")
                          }
                      }>SignIn</button>

                    }
                      
                    </span> <br />
                    <img src="/images/hero.jpg " alt="" />
                </div>
             {from === "SignIn"? <SignIn/>:<SignUp/>}
            </div>

        </>
    )
}
export default Home;