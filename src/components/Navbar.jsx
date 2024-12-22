import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/paste">Pastes</NavLink>

    </div>
  )
}

export default Navbar
