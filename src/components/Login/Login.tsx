import LoginForm from './LoginForm';
import SidePanel from './SidePanel';

function Login() {
  return (
    <div className="flex min-h-full">
      <LoginForm />
      <SidePanel />
    </div>
  );
}

export default Login;
