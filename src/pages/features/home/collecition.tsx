import Button from "../../../components/button";
import Img1 from "../../../assets/img/08cf35cdef25b1b91c9267cde6c2da60.png";
import Img2 from "../../../assets/img/637d8076f450d0748072279f5cc2048f.png";

function Collection() {
  return (
    <div className="flex w-full items-center ml-[65px]">
      <div>
        <ul className="ml-[100px]">
          <li className="ml-[200px] mb-[30px]">
            <img
              src={Img2}
              alt=""
              className="h-[400px]
              w-[400px]"
            />
            <Button
              className="relative left-[298px] bg-white w-[80px] bottom-[40px] pl-[20px] pr-[20px]"
              title="Bolues"
            />
          </li>
          <li className="ml-[200px] ">
            <img className="w-[400px] h-[700px]" src={Img1} alt="" />
            <Button
              className="relative bottom-[50px] bg-white pl-[20px] pr-[20px] ml-[15px]"
              title="Pants"
            />
          </li>
        </ul>
      </div>
      <div>
        <ul className="ml-[20px]">
          <li className="mb-[30px]">
            <img className="w-[400px] h-[700px] " src={Img1} alt="" />
            <Button
              className="relative bottom-[50px] bg-white pl-[20px] pr-[20px] ml-[15px]"
              title="Pants"
            />
          </li>
          <li>
            <img src={Img2} alt="" className="h-[400px] w-[400px]" />
            <Button
              className="relative left-[298px] bg-white w-[80px] bottom-[40px] pl-[20px] pr-[20px]"
              title="Bolues"
            />
          </li>
        </ul>
      </div>
      <div>
        <ul className="">
          <li className="ml-5 mb-[30px]">
            <img
              src={Img2}
              alt=""
              className="h-[400px]
              w-[400px]"
            />
            <Button
              className="relative left-[298px] bg-white w-[80px] bottom-[40px] pl-[20px] pr-[20px]"
              title="Bolues"
            />
          </li>
          <li className="ml-5 ">
            <img className="w-[400px] h-[700px]" src={Img1} alt="" />
            <Button
              className="relative bottom-[50px] bg-white pl-[20px] pr-[20px] ml-[15px]"
              title="Pants"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Collection;
