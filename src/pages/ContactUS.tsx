import Form  from "../pages/features/Contact/form";
import Cards from "../pages/features/Contact/cardss"
export default function ContactUS() {
  return (
    <div className="mt-[200px] mb-20">
      <div className="">
        <h1 className="font-bold text-4xl ml-20">Contact Us</h1>
      </div>
      <div>
        <Form />
        <Cards />
      </div>
     
    </div>
  );
}
