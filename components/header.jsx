import Link from "next/link";

const navLinks = [
  { name: "Contact", path: "/contact" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blogs" },
];

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-10 bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center shadow-lg">
      {/* Logo/Brand */}
      <div className="mb-4 md:mb-0">
        <Link href="/">
          <h2 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:text-pink-500 transition-colors duration-300">
            Portfolio
          </h2>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-lg font-medium text-gray-300 hover:text-white hover:underline hover:underline-offset-4 transition-all duration-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
