import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import axios from "axios";
export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  async function Logout() {
    await axios.post("/logout");

    setRedirect("/");
    setUser(null);
  }
  return (
    <header className="flex justify-between">
      <Link
        to={"/"}
        className="flex items-center gap-1"
        onClick={closeDropdown}
      >
         
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 -rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
        <span className="text-xl font-extrabold">Travelago</span>
      </Link>

      <div className="hidden sm:flex gap-2 border border-gray-800 rounded-full py-2 px-4 shadow-md shadow-gray-800">
        <div>Anywhere</div>
        <div className="border-l border-gray-800"></div>
        <div>Any week</div>
        <div className=" border-l border-gray-800" />
        <div>Add guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      
      <div className="relative">
      
        <Link
          to="#"
          onClick={toggleDropdown}
          className="flex gap-2 border border-gray-800 shadow-md shadow-gray-800 rounded-full py-2 px-4"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
        {user ? (
        <Link
            to="#"
            onClick={toggleDropdown}
            className="flex gap-2  shadow-md rounded-full py-2 px-4  bg-blue-800"
        >
            <div className=" text-white  overflow-hidden flex items-center justify-center w-3.5 h-3.5">
                <div className="font-bold">{user.name.charAt(0)}</div>
            </div>
           
        </Link>
    ) : (
        <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fill-rule="evenodd"
                d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                clip-rule="evenodd"
            />
        </svg>
    )}
          
        </Link>

        {dropdownOpen && (
          <div className="absolute right-0  w-35 bg-white border border-gray-300 rounded shadow-md">
            {!!user ? (
              <>
                <Link
                  to="/account"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-black hover:bg-blue-800 hover:text-white"
                >
                  Profile
                </Link>
                <Link
                  to="/"
                  onClick={Logout}
                  className="block px-2 py-1  text-black hover:bg-blue-800 hover:text-white text-center"
                >
                  Logout
                </Link>
              </>
            ) : (
              // If user is not logged in, show login link
              <Link
                to="/login"
                onClick={closeDropdown}
                className="block px-2 py-1  text-black hover:bg-blue-800 hover:text-white text-center"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}