import styled from "styled-components";

/* nav stuff */
export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
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
    cursor: pointer;

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

`;
