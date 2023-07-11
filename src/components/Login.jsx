import "../assets/login.css";

const Login = () => {
  return (
    <div id="login" className="text-center login">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <a className="mt-5 mb-3 text-muted" href="#signup">
            or sign up if you don{"'"}t have an account
          </a>
          <p className="mt-5 mb-3 text-muted">&copy; 2023–2026</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
