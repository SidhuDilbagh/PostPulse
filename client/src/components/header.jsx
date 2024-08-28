import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiFillMoon } from "react-icons/ai";

export default function Header() {
    const location=useLocation().pathname;
  return (
    <Navbar className="border-y-2 bg-orange-50 dark:bg-black">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold px-2  bg-gradient-to-tl from-orange-400 to-amber-200 hover:bg-rose-950 border-y-2 rounded-full text-rose-950 hover:text-orange-100"
      >
        Post Pulse
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search....."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <button
        className="h-6 w-6 border-2 rounded-full border-rose-950 lg:hidden"
        color="orange"
      >
        <AiOutlineSearch />
      </button>
      <div className="flex space-x-9 md:order-2">
        <button>
          <AiFillMoon
            className="h-6 w-6 rounded-full border-rose-950 lg:hidden"
            color="rose"
          />
        </button>
        <Link
          to="/signIn"
          className="self-center whitespace-nowrap text-sm  px-2  bg-gradient-to-tl from-orange-400 to-amber-200 hover:bg-rose-950 rounded-full text-rose-950 hover:text-orange-100"
        >
          <button>SignIn</button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link active={location === "/" } className="text-red-950" as={'div'}>
          <Link to="/">home</Link>
        </Navbar.Link>
        <Navbar.Link active={location === "/about" } className="text-red-950" as={'div'}>
          <Link to="/about" >about</Link>
        </Navbar.Link>
        <Navbar.Link active={location === "/projects" } className="text-red-950" as={'div'}>
          <Link to="/projects">projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
