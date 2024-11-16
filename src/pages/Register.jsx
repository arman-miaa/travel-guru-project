import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const {createNewUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        
        createNewUser(email, password)
            .then((result) => {
            console.log(result);
        })
        
        
}


    return (
      <div className="w-11/12 mx-auto py-4 bg-banner">
        <div className="text-black">
          <Navbar></Navbar>
        </div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                                type="text"
                                name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                                type="email"
                                name="email"
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
              <p>
                Alredy have an account? {" "}
                <Link className="text-red-700" to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;