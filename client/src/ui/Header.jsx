function Header() {
  return (
    <header className="w-full md:flex flex-row-reverse h-16 hidden border-b border-b-gray-600  items-center p-2 gap-5">
      <p>home</p>
      <p>favorites</p>
      <p>products</p>
      <p className=" absolute left-0 p-2">shop cart</p>
    </header>
  );
}

export default Header;
