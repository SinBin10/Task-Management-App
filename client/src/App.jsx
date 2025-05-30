import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";

const App = () => {
  return (
    <div>
      <a href="/signup">
        <SignUp />
      </a>
      <a href="/login">
        <Login />
      </a>
    </div>
  );
};

export default App;
