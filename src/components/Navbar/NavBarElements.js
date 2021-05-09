import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { NavLink as Link } from 'react-router-dom'


export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 999; 
`

export const NavLink = styled(Link)`
  color: #efefef;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 10pt;
  
  &.hover {
    color: rgb(123, 187, 199);
    text-decoration: none; 
  }

  &.active {
    color: #efefef;
    text-decoration: none; 
  }
`

export const Bars = styled(FiMenu)`
  display: none;
  color: #efefef;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer; 
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -100px;
  
  @media screen and (max-width: 768px) {
    display: none; 
  }
`
