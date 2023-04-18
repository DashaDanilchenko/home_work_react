import { useLocation, useNavigate } from 'react-router-dom';
// import useAuth from './hook/useAuth';

const Login = ({setUser}) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // const user = form.userName.value;
    setUser(form.userName.value)
    navigate(fromPage, {replace: true})
    
    // signIn(user, () => navigate(fromPage, {replace: true}));
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input type="text" name="userName"/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;