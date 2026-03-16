import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <p>Please sign in to access the dashboard.</p>
      <button className="btn-primary" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};

export default Login;