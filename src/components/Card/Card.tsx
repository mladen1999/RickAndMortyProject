const Card = ({ name, image }: any) => {
  return (
    <div className="cursor-pointer h-[300px] w-[300px] m-[40px]">
      <img src={image} alt="" />
      <div className="">
        <h1 className="text-[black] ">{name}</h1>
      </div>
    </div>
  );
};

export default Card;
