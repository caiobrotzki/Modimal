import { useState } from "react";
import Monday from "../../../assets/img/Monday.jpg";
import Sunday from "../../../assets/img/Sunday.jpg";
import Tuesday from "../../../assets/img/Thurdsay.png";
import Wednesday from "../../../assets/img/Tuesday.jpg";
import Friday from "../../../assets/img/Wednesday.png";
import Saturday from "../../../assets/img/Monday.jpg";
import Thursday from "../../../assets/img/Sunday.jpg";

export default function Modiweek() {
  const imagens = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];
  const [start, setStart] = useState(0);
  const visibleCount = 5;

  const handlePrev = () => {
    setStart((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStart((prev) =>
      Math.min(prev + visibleCount, imagens.length - visibleCount)
    );
  };

// ...existing code...
return (
  <div className="w-full flex flex-col items-center mb-10">
    <div className="flex gap-2 justify-center items-center w-full">
      <button
        onClick={handlePrev}
        disabled={start === 0}
        className="w-10 h-10 ml-6 flex items-center justify-center rounded-full bg-[#e6ece6] text-[#5A6D57] hover:bg-[#d2e0d2] transition disabled:opacity-30"
        aria-label="Anterior"
      >
        &#8592;
      </button>
      <div className="flex gap-6 overflow-hidden px-1 py-2 mx-auto"
        style={{ width: `${visibleCount * 300 + (visibleCount - 1) * 24}px` }}>
        {imagens.slice(start, start + visibleCount).map((img, idx) => (
          <div
            key={start + idx}
            className="relative flex flex-col items-center"
          >
            <img
              src={img}
              alt={`Dia ${start + idx + 1}`}
              className="w-[300px] h-[426px] object-cover rounded-lg border border-[#e6ece6] shadow-sm transition-all duration-500 hover:scale-105"
            />
            <span className="mt-2 text-xs text-[#5A6D57] font-medium">Dia {start + idx + 1}</span>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={start + visibleCount >= imagens.length}
        className="w-10 h-10 mr-6 flex items-center justify-center rounded-full bg-[#e6ece6] text-[#5A6D57] hover:bg-[#d2e0d2] transition disabled:opacity-30"
        aria-label="Próximo"
      >
        &#8594;
      </button>
    </div>
  </div>
);

}