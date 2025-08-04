import Image from "./features/user/Imagem-user";
import Login from "./features/login/login";

function User() {
  return (
    <div className="w-full flex justify-start gap-[40px] px-[40px]">
      <Image />
      <Login />
    </div>
  );
}

export default User;
