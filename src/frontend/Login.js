import { Link } from 'react-router-dom';
const Login = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="login-form bg-light mt-4 p-4">
              <form className="row g-3">
                <h4>Login <Link to="/" className='float-end'>Home</Link></h4>
                <div className="col-12">
                  <label>Email</label>
                  <input type="email" name="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-12">
                  <label>Password</label>
                  <input type="password" name="password" className="form-control" placeholder="Password" />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe"> Remember me</label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-dark float-end">Login</button>
                </div>
              </form>
              <hr className="mt-4" />
              <div className="col-12">
                <p className="text-center mb-0">Have not account yet? <Link to="/register">Signup</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login