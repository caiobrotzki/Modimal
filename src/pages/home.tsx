import Fundo from "./features/home/fundo";
import CardHome from "./features/home/card_home";
import Collection from "./features/home/collecition";
import Modiweek from "./features/home/modiweek ";
import Folow from "../assets/img/Follow Us.svg"

function Home() {
  return (
    <div className=" min-h-screen ">
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
      <div>
        <h1 className="font-bold text-[30px] ml-[170px] mt-10 mb-20">Modiweek</h1>
        <Modiweek />
      </div>
  
      <div className="mb-20">
        <h1 className="font-bold text-[30px] ml-[170px] mt-10 mb-20">Follow us @modimal</h1>
        <div className="flex justify-center">
          <img src={Folow} alt="" className="er" />
        </div>
      </div>

    </div>
  );
}

export default Home;
