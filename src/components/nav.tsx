import Search from "../assets/img/magnifying-glass.svg";
import User from "../assets/img/user.svg";
import Shopping from "../assets/img/shopping-bag.svg";
import Heart from "../assets/img/heart.svg";
import { Link } from "react-router-dom";
import { Leaf } from "phosphor-react";

function Nav() {
  return (
    <div className="w-full h-[60px] fixed top-0 z-50">
      <div className="text-center text-white bg-[#5A6D57] py-2">
        <h3>Enjoy Free Shipping On All Orders</h3>
      </div>
      <div className="flex justify-between items-center bg-white py-3 px-6">
        <div>
          <div className="flex ">
            <Link to="/" className="flex items-center">
              <h1 className="text-[30px] font-bold ml-[55px]">modimal</h1>
              <Leaf className="ml-2 rounded-full bg-[#5A6D57] text-white" size={22}  />
            </Link>
          </div>
          <p className="text-[10px] text-center ml-20">women clothing</p>
        </div>
        <div>
          <ul className="flex space-x-10 hover:cursor-pointer text-[20px]">
            <li>Collection</li>
            <li>New In</li>
            <li>Modiweek</li>
            <li>Plus Size</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-6 mr-[20px]">
            <li>
              <img src={Search} alt="Search" className="w-6 h-6" />
            </li>
            <Link to="/Registre">
              <li>
                <img src={User} alt="User" className="w-6 h-6" />
              </li>
            </Link>
            <li>
              <img src={Heart} alt="Heart" className="w-6 h-6" />
            </li>
            <li>
              <img src={Shopping} alt="Shopping" className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
