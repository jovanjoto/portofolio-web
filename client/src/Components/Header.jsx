// import { Link } from 'react-router-dom';

function Header({}) {
  return (
    <header className="flex justify-between items-center p-5 bg-black bg-opacity-95 absolute top-0 w-full z-50 text-white">
      <div className="text-2xl font-bold">Jovanjoto</div>
      <nav className="flex-1 flex justify-end pr-20 ">
        <ul className="flex gap-x-10 text-xl">
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#experience").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="hover:underline"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="hover:underline"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// onClick={(e) => {
//   e.preventDefault();
//   document.querySelector("#home").scrollIntoView({
//     behavior: "smooth",
//   });
// }}

export default Header;
