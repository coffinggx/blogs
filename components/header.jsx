
import Link from "next/link"

const navLinks = [
  { name: "Contact", path: "/contact" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blogs" },
];

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center ">
      <div>
        <Link href={"/"}> <h2 className="text-2xl font-bold">Portfolio</h2></Link>
      </div>
      <div className="flex gap-4">
        {navLinks.map((link) => (
          <Link className="text-lg font-medium hover:translate-y-1 hover:transition-all hover:underline" key={link.name} href={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
