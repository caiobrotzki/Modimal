import Image from "./features/user/Imagem-user";
import Resgistre from "./features/user/registre";

function User() {
  return (
    <div className="w-full flex justify-start gap-[40px] px-[40px]">
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
