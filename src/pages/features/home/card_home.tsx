import Card from "../../../components/card";
import Img1 from "../../../assets/img/2e81613b401c4689b9ced6df9a3b631a.png";

function CardHome() {
  const ArrayCard = [
    {
      img: Img1,
      title: "Tailored Stretch",
      description: "Turn it up pants",
      value: "$180",
    },
    {
      img: Img1,
      title: "Tailored Stretch",
      description: "Turn it up pants",
      value: "$180",
    },
    {
      img: Img1,
      title: "Tailored Stretch",
      description: "Turn it up pants",
      value: "$180",
    },
  ];

  return (
    <div className="flex justify-center items-center py-8 ">
      <div className="flex flex-wrap gap-8 justify-center">
        {ArrayCard.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            img={card.img}
            value={card.value}
            classNameDiv="bg-white  rounded-lg shadow-lg w-[400px] flex flex-col"
            classNameDiv2="flex flex-col ml-5"
            classNameDiv3=" flex "
            classNameImg=" h-auto  "
            classNameH1="text-xl font-semibold text-gray-800 pt-5"
            classNameP="text-sm text-gray-600"
            classNameP2="text-lg font-bold text-gray-900 mb-5 relative left-[270px] bottom-5 "
          />
        ))}
      </div>
    </div>
  );
}

export default CardHome;
