import Search from "../atoms/Search.jsx";

const Navbar = () => {
  return (
    <div className="navbar">
      <button>
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <Search />
    </div>
  );
};

export default Navbar;
