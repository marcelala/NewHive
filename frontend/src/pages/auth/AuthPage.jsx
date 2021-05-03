// Project files
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

export const AuthPage = () => {
  //temporary
  const userHasAccount = true;

  //Methods
  async function login(loginData) {
    //const loginSuccess = await Auth.login(loginData);
    
    //temporary
    const loginSuccess = true;
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="auth-page">
      <h1 className="main-header">Community Name</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        natus nostrum accusamus eos fuga deleniti! Rerum, ipsa voluptatibus
        explicabo minus nam saepe voluptatem amet iure voluptates a. Animi,
        suscipit laborum!
      </p>

      {userHasAccount ? <LoginForm onSubmit={login} /> : <RegisterForm />}
    </div>
  );
};
