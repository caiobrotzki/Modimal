import Image from "./features/login/imagem-login";
import Login from "./features/login/login";

function User() {
  return (
    <div className=" w-full flex justify-between">
      <div>
        <Image />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default User;
