import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setLoginError('');
    setSuccess('');



    // validation

    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
      console.log(result.user);
      if(result.user.emailVerified){
        setSuccess("success")

      }
      else{
        alert('varify your email');
      }
    })
    .catch(error =>{
      console.log(error);
      setLoginError("error")
      alert('varify your email');
      alert('varify your email');

    })
  };


  const handleForgetPassw = () =>{

    const email = emailRef.current.value;

    if(!email){
      console.log('give an email', emailRef.current.value);
      return;
    }

    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      console.log('write a valid email');
      return;
    }


    sendPasswordResetEmail(auth, email)
    .then(()=>{
      alert('check you email');
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <form onSubmit={handleLogin}  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover" onClick={handleForgetPassw}>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <p>New User? Please  <Link to="/register" className="font-extrabold">Register</Link></p>


          {loginError && (
              <div>
                <p className=" text-red-500 font-extrabold">{loginError}</p>
              </div>
            )}
            {success && (
              <div>
                <p className=" text-green-500 font-extrabold">{success}</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Login;
