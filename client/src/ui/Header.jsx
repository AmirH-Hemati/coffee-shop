import NavLink from "./NavLink";

function Header() {
  return (
    <header className="w-full md:flex flex-row-reverse h-16 hidden border-b border-b-gray-600  items-center p-4 gap-5">
      <NavLink path="/">
        <p>home</p>
      </NavLink>
      <NavLink path="/">
        <p>favorites</p>
      </NavLink>
      <NavLink path="/login">
        <p>login</p>
      </NavLink>
      <NavLink path="/" classNameStyle="absolute left-0 p-2">
        <p>shop cart</p>
      </NavLink>
    </header>
  );
}

export default Header;
