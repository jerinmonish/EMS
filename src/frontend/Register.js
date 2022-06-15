import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="login-form bg-light mt-4 p-4">
              <form className="row g-3">
                <h4>Signup <Link to="/" className='float-end'>Home</Link></h4>
                <div className="col-12">
                  <label>Username</label>
                  <input type="text" name="username" className="form-control" placeholder="Username" />
                </div>
                <div className="col-12">
                  <label>Password</label>
                  <input type="password" name="password" className="form-control" placeholder="Password" />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark float-end">Register</button>
                </div>
              </form>
              <hr className="mt-4" />
              <div className="col-12">
                <p className="text-center mb-0">Already Have an Account ? <Link to="/login">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Register