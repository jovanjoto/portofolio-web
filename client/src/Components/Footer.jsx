function Footer() {
  return (
    <footer className="bg-black bg-opacity-95 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0 ">
            <p>
              &copy; {new Date().getFullYear()} jovanjoto. All rights reserved.
            </p>
          </div>
          <div className="mb-4  justify-center w-full md:w-auto md:mb-0">
            <nav className="flex mr-36 gap-x-10">
              <a
                href="#top"
                className="hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#top").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Top
              </a>
              <a
                href="#about"
                className="hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Projects
              </a>
            </nav>
          </div>
          <div className="mb-4 md:mb-0 mr-4">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/jovanjoto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://github.com/jovanjoto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
