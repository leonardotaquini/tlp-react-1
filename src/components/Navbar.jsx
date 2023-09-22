import { useState } from "react";

const Navbar = () => {
  const [session, setSession] = useState(false);

  const handleLogin = () => {
    setSession(!session);
  }

  return (
    <>
      <nav className="navbar  bg-dark">
        <h3 className="text-white">Navbar</h3>
        <button onClick={ handleLogin } className="btn btn-primary m-2">{ session ? "Logout" : "Login" }</button>
      </nav>
    </>
  );
};

export default Navbar;
