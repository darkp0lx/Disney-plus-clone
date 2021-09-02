import Link from 'next/link'
import styled from 'styled-components'

export const ItemNav = ({ icon, title }) => {
  return (
    <NavItem>
      <Link href={`${title == 'Home' ? '/' : '/' + title.toLowerCase()}`}>
        <a>
          <Button>
            {icon}
            <h3>{title}</h3>
          </Button>
        </a>
      </Link>
    </NavItem>
  )
}
const Button = styled.div`
  display: flex;
  align-items: center;
`
const NavItem = styled.li`
  h3 {
    margin: 0;
    margin-left: 2px;
    font-size: 0.4em;
  }
  a {
    position: relative;
    font-size: 18px;
    overflow: hidden;
    padding-bottom: 0.4em;
    text-decoration: none;
    font-weight: bold;
    color: black;
    width: fit-content;
    color: white;
  }
  a::after {
    content: '';
    position: absolute;
    bottom: -0.4em;
    right: 0;
    width: 100%;
    opacity: 0;
    height: 0.4em;
    background-color: GoldenRod;
    transform-origin: center left;
    postion: absolute;
  }
  a:hover::after {
    animation-name: textHover;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`
