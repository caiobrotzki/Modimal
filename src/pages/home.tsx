import Fundo from "./features/home/fundo";
import CardHome from "./features/home/card_home";
import Collection from "./features/home/collecition";

function Home() {
  return (
    <div className=" min-h-screen bg-gray-100">
      <Fundo />
      <div className="mt-[100px]">
        <h1 className=" font-bold text-[30px] ml-[170px]">Best Sellers</h1>
      </div>
      <div>
        <CardHome />
      </div>
      <div>
        <h1 className="font-bold text-[30px] ml-[170px] mb-20">Collection</h1>
        <Collection />
      </div>
    </div>
  );
}

export default Home;
