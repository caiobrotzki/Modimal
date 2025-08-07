import {
  Copyright,
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  TiktokLogo,
  UserRectangle,
} from "phosphor-react";
import Input from "./input";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-[450px] flex justify-between bg-[#404040] text-white py-8 px-12 pt-[50px] ">
      <div>
        <h1 className="text-[25px]">
          Join our club, get 15% off for your Birthday
        </h1>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          className="text-white pr-[270px] mt-4 bg-[#404040] border-2 pl-5 py-[8px]  "
        />
        <ul className="flex space-x-6 mt-[80px]">
          <li>
            <InstagramLogo className="text-[25px] hover:scale-125 transition-all duration-300 " />
          </li>
          <li>
            <FacebookLogo className="text-[25px] hover:scale-125 transition-all duration-300" />
          </li>
          <li>
            <PinterestLogo className="text-[25px] hover:scale-125 transition-all duration-300" />
          </li>
          <li>
            <TiktokLogo className="text-[25px] hover:scale-125 transition-all duration-300" />
          </li>
        </ul>
        <div className="mt-[40px] flex items-center">
          <Copyright />
          <p className="ml-[5px]">2023 modimal. All Rights Reserved.</p>
        </div>
      </div>
      <div className="flex space-x-12 ml-[220px]">
        <div>
          <h1 className="font-bold mb-4">About Modimal</h1>
          <ul className="grid gap-4 hover:cursor-pointer">
            <li>Collection</li>
            <li>Sustainability</li>
            <li>Privacy Policy</li>
            <li>Support System</li>
            <li>Terms & Condition</li>
            <li>Copyright Notice</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-4">Help & Support</h1>

          <ul className="grid gap-4 hover:cursor-pointer">
            <li>Orders & Shipping</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-4">Join Up</h1>
          <ul className="grid gap-4 hover:cursor-pointer">
            <li>Modimal Club</li>
            <li>Careers</li>
            <li>Visit Us</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#5A6D57] relative  mt-[280px]  flex h-[20px] py-[20px] pl-[20px] pr-[20px] items-center border-white border-[1px]">
        <UserRectangle className="text-[25px]" />
      </div>
    </div>
  );
}

export default Footer;
