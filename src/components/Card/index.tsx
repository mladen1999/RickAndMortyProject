const Card = ({ name, image }: any) => {
  return (
    <div className=" my-9 sm:m-[20px] sm:my-12 sm:h-[300px] sm:w-[300px]">
      <img src={image} alt="" />
      <div className=" h-[70px] bg-white">
        <h1 className="pt-4 font-bold text-[black]">{name}</h1>
      </div>
    </div>
  );
};

export default Card;
