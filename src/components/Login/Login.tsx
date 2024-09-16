import LoginForm from './LoginForm';
import SidePanel from './SidePanel';

function Login() {
  return (
    <div className="flex h-screen">
      <LoginForm />
      <SidePanel />
    </div>
  );
}

export default Login;
