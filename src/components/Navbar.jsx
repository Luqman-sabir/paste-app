import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-center gap-7 py-5 text-white font-semi-bold text-xl">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/paste">Pastes</NavLink>

    </div>
  )
}

export default Navbar
