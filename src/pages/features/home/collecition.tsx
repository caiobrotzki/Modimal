import Button from "../../../components/button";
import Img1 from "../../../assets/img/08cf35cdef25b1b91c9267cde6c2da60.png";
import Img2 from "../../../assets/img/637d8076f450d0748072279f5cc2048f.png";

function Collection() {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-8">
          <div className="relative">
            <img
              src={Img2}
              alt="Blouse"
              className="w-full h-auto object-cover"
            />
            <Button
              className="absolute bottom-4 right-4 bg-white px-4 py-2"
              title="Blouses"
            />
          </div>
          <div className="relative">
            <img
              src={Img1}
              alt="Pants"
              className="w-full h-auto object-cover"
            />
            <Button
              className="absolute bottom-4 left-4 bg-white px-4 py-2"
              title="Pants"
            />
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="flex flex-col gap-8">
          <div className="relative">
            <img
              src={Img1}
              alt="Pants"
              className="w-full h-auto object-cover"
            />
            <Button
              className="absolute bottom-4 left-4 bg-white px-4 py-2"
              title="Pants"
            />
          </div>
          <div className="relative">
            <img
              src={Img2}
              alt="Blouse"
              className="w-full h-auto object-cover"
            />
            <Button
              className="absolute bottom-4 right-4 bg-white px-4 py-2"
              title="Blouses"
            />
          </div>
        </div>

        {/* Coluna 3 */}
        <div className="flex flex-col gap-8">
          <div className="relative">
            <img
              src={Img2}
              alt="Blouse"
              className="w-full h-auto object-cover"
            />
            <Button
              className="absolute bottom-4 right-4 bg-white px-4 py-2"
              title="Blouses"
            />
          </div>
          <div className="relative">
            <img
              src={Img1}
              alt="Pants"
              className="w-full h-auto object-cover"
            />
            <Button
              className="absolute bottom-4 left-4 bg-white px-4 py-2"
              title="Pants"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;