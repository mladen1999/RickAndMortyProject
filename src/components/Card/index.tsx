const Card = ({ name, image }: any) => {
  return (
    <div className="m-[40px] h-[300px] w-[300px] cursor-pointer">
      <img src={image} alt="" />
      <div className="">
        <h1 className="text-[black] ">{name}</h1>
      </div>
    </div>
  );
};

export default Card;
