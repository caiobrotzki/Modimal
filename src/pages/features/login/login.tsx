import { AppleLogo, GoogleLogo, FacebookLogo } from "phosphor-react";
import Input from "../../../components/input";
import Button from "../../../components/button";
import { Link } from "react-router-dom";

function Reg() {
  return (
    <div className="mt-[250px] ml-[20px] w-[600px]">
      <h1 className="font-semibold text-[50px] text-center mb-6">Log in</h1>

      <div className="grid gap-3">
        <Input
          className="border-2 py-3 px-4 rounded-md w-full"
          type="email"
          placeholder="Email"
        />
        <Input
          className="border-2 py-3 px-4 rounded-md w-full"
          type="password"
          placeholder="Password"
        />

        <Button
          className="py-3 bg-[#5A6D57] text-white w-full rounded-md transition-all duration-300 hover:bg-[#4a5b4a]"
          type="button"
          title="Login"
        />

        <div className="flex justify-center items-center mt-4">
          <span>New to Modimal?</span>
          <Link to="/registre">
            <Button
              className="ml-4 text-[#748C70] py-2 px-4"
              type="button"
              title="Create an account"
            />
          </Link>
        </div>

        <div className="text-center mt-6">
          <h1 className="mb-4">Or</h1>
          <ul className="flex justify-center space-x-5">
            <li>
              <AppleLogo className="text-[40px] bg-white rounded-full text-black" />
            </li>
            <li>
              <GoogleLogo className="text-[40px] rounded-full text-[#EA4335]" />
            </li>
            <li>
              <FacebookLogo className="text-[40px] bg-[#1877F2] rounded-full text-white" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reg;
