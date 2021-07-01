import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { MenuData } from "../../../data/MenuData"
import { Button } from "../../Ui/Button/Button.component"

class Navbar extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    let toCheck = ["/about", "/careers", "/trips", "/contact"]

    return (
      <Nav
        dark={
          typeof window !== "undefined" &&
          toCheck.some(link => window.location.href.includes(link))
        }
      >
        <NavLink to="/">EXPLORIX</NavLink>
        <MenuIcon onClick={this.handleClick}>
          {this.state.clicked ? <AiOutlineClose /> : <FaBars />}
        </MenuIcon>
        <NavMenu hidden={!this.state.clicked ? true : false}>
          {MenuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true" round="true" to="/trips">
            Book a Trip
          </Button>
        </NavBtn>
      </Nav>
    )
  }
}

export default Navbar

const Nav = styled.nav`
  background: ${({ dark }) => (dark ? "#000" : "transparent")};

  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const MenuIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.2s;

  @media screen and (max-width: 768px) {
    transform: ${({ hidden }) =>
      hidden ? "translateY(-100%)" : "translateY(0)"};

    flex-direction: column;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: -1;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
