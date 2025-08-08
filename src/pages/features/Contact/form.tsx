import { Envelope } from "phosphor-react";

const ArrayInput = [
  { placeholder: "Full Name", type: "text" },
  { placeholder: "Email", type: "email" },
  { placeholder: "Subject", type: "text" },
  { placeholder: "Order Number", type: "text" },
  { placeholder: "Message", type: "text" },
];

export default function ContactUS() {
  return (
    <div className="mt-[60px] ml-[250px] flex flex-col mr-[200px]">
      <div className="flex items-center mb-4">
        <Envelope size={33} className="font-bold" />
        <h1 className="font-semibold text-3xl ml-2">Write Us</h1>
      </div>
      <div className="mt-10 flex flex-col">
        <h1 className="mb-4 font-semibold text-2xl">Your Information</h1>
        <form className="flex flex-col gap-4">
          {ArrayInput.map((input, idx) => (
            <input
              key={idx}
              type={input.type}
              placeholder={input.placeholder}
              className="border-b h-[40px] pl-7 w-full"
              required
            />
          ))}
          <div>
            <label className="inline-flex items-center">
              <input type="checkbox" required className="form-checkbox text-red-600" />
              <span className="ml-2 text-gray-700 text-sm">
                I have read and understood the contact us privacy and policy.
              </span>
            </label>
          </div>
          <div className="w-full flex justify-end">
            <button
              className="mt-8 py-3 rounded-lg text-white bg-[#5A6D57] font-semibold text-lg transition duration-300 w-[288px] hover:bg-[#46604a] shadow"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
