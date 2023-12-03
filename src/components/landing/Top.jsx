import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div>
      <header>
        <Link to={"/auth"}>
          <button>Sign up</button>
        </Link>
      </header>
    </div>
  );
};

export default Top;
