import React from "react";
import {StyledNav} from "./styles";

function NavBar() {
  return (
    <StyledNav>
      <h1>
        C<span>o</span>ffee Inf<span>o</span> Sheet
      </h1>
      <button className="nav-toggle">
        <span className="hamburger"></span>
      </button>
    </StyledNav>
  );
}

export default NavBar;
