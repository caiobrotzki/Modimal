import React from "react";

interface CardProp {
  title: string;
  description: string;
  classNameDiv: string;
  img?: string;
  classNameImg?: string;
  classNameH1: string;
  classNameP: string;
  classNameDiv2?: string;
  classNameDiv3?: string;
  classNameP2?: string;
  value?: string;
}
const Card: React.FC<CardProp> = ({
  title,
  description,
  img,
  classNameDiv,
  classNameImg,
  classNameH1,
  classNameP,
  classNameDiv2,
  classNameDiv3,
  classNameP2,
  value,
}) => {
  return (
    <div className={classNameDiv}>
      <div>
        <img src={img} alt="" className={classNameImg} />
      </div>
      <div className={classNameDiv2}>
        <h1 className={classNameH1}>{title}</h1>
        <p className={classNameP}>{description}</p>
      </div>
      <div className={classNameDiv3}>
        <p className={classNameP2}>{value}</p>
      </div>
    </div>
  );
};

export default Card;
