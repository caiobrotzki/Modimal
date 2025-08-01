import Img from "../../../assets/img/4ec616f602d9f91b003061a5deef40d0.png";
import Button from "../../../components/button";

function Fundo() {
  return (
    <div className="relative w-screen h-screen ">
      <img
        src={Img}
        className="absolute top-20 left-0 w-screen h-screen object-cover z-0"
        alt="Fundo"
      />
      <div className="absolute left-20 top-2/3 z-30">
        <h1 className="text-3xl font-bold w-[400px]">
          Elegance in simplicity,
        </h1>
        <h1 className="text-3xl font-bold">Earth’s harmony</h1>
        <Button
          title="New In"
          className="bg-white mt-5 w-[200px] h-10 rounded-lg transition-all duration-300 hover:scale-105"
          type="button"
        />
      </div>
    </div>
  );
}

export default Fundo;
