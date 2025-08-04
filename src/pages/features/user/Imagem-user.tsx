import UserFundo from "../../../assets/img/User-fundo.jpg";

function Image() {
  return (
    <div className="mt-10 sm:mt-[100px] md:mt-[150px] mb-10 sm:mb-[100px] px-4 sm:px-8 md:ml-[50px] lg:ml-[150px]">
      <img
        src={UserFundo}
        alt="Imagem de fundo do usuário"
        className="w-full max-w-[400px] h-auto rounded-md shadow-md"
      />
    </div>
  );
}

export default Image;
