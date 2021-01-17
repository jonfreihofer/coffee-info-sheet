import styled from "styled-components";

/* nav stuff */
export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
  background-color: #333;
  top: 0;
  width: 100%;
  padding: 1.5em;
  background: #1c1c1c;

  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 2rem;
    color: white;

    /* was trying to make the o's look like coffee beans...haha */
    span {
      color: orangered;
    }
  }

  .nav-toggle {
    border: 0;
    background: transparent;
    padding: 0.25rem;
  }

  /* will replace this hamburger with svg or something */
  .hamburger {
    margin-right: 3em;
    display: block;
    position: relative;
  }
  .hamburger:hover {
    cursor: pointer;
    color: orangered;
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    background: white;
    width: 2em;
    height: 3px;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
  }

  .hamburger::before,
  .hamburger::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
  }
  .hamburger::before {
    top: 6px;
  }
  .hamburger::after {
    bottom: 6px;
  }
`;
