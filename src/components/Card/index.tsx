const Card = ({ name, image }: any) => {
  return (
    <div className="m-5  min-h-[270px] w-[200px] md:min-h-[300px] md:w-[300px]">
      <img src={image} alt={image} />
      <div className=" flex justify-center bg-white">
        <h2 className="ml-4 py-3 pt-4 text-left font-bold text-[black]">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Card;
