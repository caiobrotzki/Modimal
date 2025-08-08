import Card from "../Contact/cardprop";
import { Envelope, ChatText, IdentificationCard } from "phosphor-react";

const cardData = [
  {
    icon: <ChatText size={40} className=" mb-3" />,
    title: "Chat with us",
    subtitle: "We are here and ready to chat",
    button: "Start chat",
  },
  {
    icon: <IdentificationCard size={40} className=" mb-3" />,
    title: "Call Us",
    subtitle: "We're here to Talk to You",
    button: "+1(929)460-3208",
  },
  {
    icon: <Envelope size={40} className=" mb-3" />,
    title: "Email Us",
    subtitle: "You are welcome to send us an email",
    button: "Send Email",
  },
];

export default function Cards() {
  return (
    <div className="mt-20">
      <div className="flex gap-8 flex-wrap justify-center">
        {cardData.map((card, idx) => (
          <Card
            key={idx}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            button={card.button}
          />
        ))}
      </div>
    </div>
  );
}