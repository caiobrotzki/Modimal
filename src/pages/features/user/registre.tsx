import { AppleLogo, GoogleLogo, FacebookLogo } from "phosphor-react";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { Link } from "react-router-dom";
function Reg() {
  return (
    <div className="mt-[250px] relative right-[200px]  w-[600px]">
      <h1 className="font-semibold text-[30px] text-center">Create Accont</h1>
      <div className="relative left-[140px] grid gap-2 mt-[30px]">
        <Input
          className="border- border-[2px] mb-[5px] py-1 pl-1 pr-[120px]"
          type="text"
          placeholder="Frist Name"
        />
        <Input
          className="border- border-[2px] mb-[5px] py-1 pl-1 pr-[120px]"
          type="text"
          placeholder="Last Name"
        />
        <Input
          className="border- border-[2px] mb-[5px] py-1 pl-1 pr-[120px]"
          type="email"
          placeholder="Email"
        />
        <Input
          className="border- border-[2px] mb-[5px] py-1 pl-1 pr-[120px] "
          type="passoword"
          placeholder="Password"
        />
        <Button
          className="py-1 bg-[#5A6D57] text-white px-[107px]"
          type="button"
          title="Registre Now"
        />
        <div className="flex items-center">
          <h1>Already have an account? </h1>
          <Link to="/login">
            <Button
              className="ml-[20px] text-[#748C70] py-4"
              type="submit"
              title="Log In"
            />
          </Link>
        </div>
        <div className=" ">
          <h1 className="ml-[130px] mb-5">Or</h1>
          <ul className="flex space-x-5 ml-[75px]">
            <li>
              <AppleLogo className="text-[40px] bg-white rounded-full text-black " />
            </li>
            <li>
              <GoogleLogo className="text-[40px] rounded-full text-[#EA4335]" />
            </li>
            <li>
              <FacebookLogo className="text-[40px]  bg-[#1877F2] rounded-full text-white" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Reg;
