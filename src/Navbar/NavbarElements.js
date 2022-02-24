import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';





export const Nav = styled.nav`
  background: blue;
  height:20px;
  display: flex;
  justify-content:center;
  align-items:center;
  font-weight: 700;
  ${'' /* padding:8px; */}
 
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  p{
    text-decoration:none;
    background:blue;
    font-size:12px;
  }
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

