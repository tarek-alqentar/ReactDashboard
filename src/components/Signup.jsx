import "../assets/signup.css";

const Signup = () => {
  return (
    <div className="text-center signup">
      <main className="form-signup w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingFirstInput"
              placeholder="John"
            />
            <label htmlFor="floatingFirstInput">First Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingLastInput"
              placeholder="John"
            />
            <label htmlFor="floatingLastInput">Last Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingEmailInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingEmailInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Create New Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmePassword"
              placeholder="Password"
            />
            <label htmlFor="floatingConfirmePassword">Confirme Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2023–2026</p>
        </form>
      </main>
    </div>
  );
};

export default Signup;
