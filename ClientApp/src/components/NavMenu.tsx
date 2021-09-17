import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import "../css/index.css";

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(transparent, --light-black);
  height: 50px;
  width: 100%;
  padding: 0 50px;
`;

const NavBrand = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 7%;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 10%;
`;

const NavMenu = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Navbar>
      <NavBrand>
        <Link to='/'>
          <span>ReactCsharp</span>
        </Link>
        <FiMenu onClick={toggle} />
      </NavBrand>
      <Nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/users/authenticate'>Login</Link>
        </li>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;
