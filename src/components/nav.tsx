import Search from "../assets/img/magnifying-glass.svg";
import User from "../assets/img/user.svg";
import Shopping from "../assets/img/shopping-bag.svg";
import Heart from "../assets/img/heart.svg";
import { Link } from "react-router-dom";
import { Leaf } from "phosphor-react";

const navItems = ["Home","Collection","New In","Modiweek","Plus Size","Sustainability",];
function Nav() {
  return (
    <div className="w-full h-[60px] fixed top-0 z-50">
      <div className="text-center text-white bg-[#5A6D57] py-2">
        <h3>Enjoy Free Shipping On All Orders</h3>
      </div>
      <div className="flex justify-between items-center bg-white py-3 px-6">
        <div>
          <div className="flex">
            <Link to="/" className="flex items-center">
              <h1 className="text-[30px] font-bold ml-[55px]">modimal</h1>
              <Leaf className="ml-2 rounded-full bg-[#5A6D57] text-white" size={22} />
            </Link>
          </div>
          <p className="text-[10px] text-center ml-20">women clothing</p>
        </div>
        <div>
          <ul className="flex space-x-10 hover:cursor-pointer text-[20px]">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-[#5A6D57] hover:scale-105 transition-all duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex space-x-6 mr-[20px]">
            <li>
              <img src={Search} alt="Search" className="w-5 h-5" />
            </li>
            <Link to="/Registre">
              <li>
                <img src={User} alt="User" className="w-5 h-5" />
              </li>
            </Link>
            <li>
              <img src={Heart} alt="Heart" className="w-5 h-5" />
            </li>
            <li>
              <img src={Shopping} alt="Shopping" className="w-5 h-5" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav