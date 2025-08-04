import { AppleLogo, GoogleLogo, FacebookLogo } from "phosphor-react";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { Link } from "react-router-dom";

function Reg() {
  return (
    <div className="mt-[250px] ml-[0px] w-[600px]">
      <h1 className="font-semibold text-[50px] text-center">Create Account</h1>

      <div className="grid gap-2 mt-[30px]">
        <Input
          className="border-2 mb-2 py-3 px-4 rounded-md w-full"
          type="text"
          placeholder="First Name"
        />
        <Input
          className="border-2 mb-2 py-3 px-4 rounded-md w-full"
          type="text"
          placeholder="Last Name"
        />
        <Input
          className="border-2 mb-2 py-3 px-4 rounded-md w-full"
          type="email"
          placeholder="Email"
        />
        <Input
          className="border-2 mb-2 py-3 px-4 rounded-md w-full"
          type="password"
          placeholder="Password"
        />

        <Button
          className="py-3 bg-[#5A6D57] text-white w-full rounded-lg transition-all duration-300 hover:bg-[#4a5b4a]"
          type="button"
          title="Register Now"
        />

        <div className="flex items-center justify-center mt-4">
          <span>Already have an account?</span>
          <Link to="/login">
            <Button
              className="ml-[20px] text-[#748C70] py-2 px-4"
              type="submit"
              title="Log In"
            />
          </Link>
        </div>

        <div className="text-center mt-6">
          <h1 className="mb-4">Or</h1>
          <ul className="flex justify-center space-x-6">
            <li>
              <AppleLogo className="text-3xl bg-white rounded-full text-black" />
            </li>
            <li>
              <GoogleLogo className="text-3xl text-[#EA4335]" />
            </li>
            <li>
              <FacebookLogo className="text-3xl bg-[#1877F2] rounded-full text-white" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reg;
