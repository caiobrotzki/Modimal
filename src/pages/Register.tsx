import Image from "./features/user/Imagem-user";
import Resgistre from "./features/user/registre";

function User() {
  return (
    <div className=" w-full flex justify-between">
      <div>
        <Image />
      </div>
      <div>
        <Resgistre />
      </div>
    </div>
  );
}

export default User;
