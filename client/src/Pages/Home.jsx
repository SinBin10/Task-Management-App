import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <h1 className="text-5xl text-white">
      <Link to="/signup">Get Started</Link>
    </h1>
  );
};
