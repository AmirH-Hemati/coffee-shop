import { Link } from "react-router-dom";

function NavLink({ path, classNameStyle, children }) {
  return (
    <Link className={`cursor-pointer ${classNameStyle}`} to={path}>
      {children}
    </Link>
  );
}

export default NavLink;
