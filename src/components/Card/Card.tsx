const Card = ({ name, image }: any) => {
  return (
    <div className=" rounded-lg overflow-hidden h-30 w-30 ml-3 mr-3 round-10 pt-5">
      <img className="w-full" src={image} alt={name} />
      <div className="font-bold text-xl mb-2 text-center pt-5 pb-10">
        {name}
      </div>
    </div>
  );
};

export default Card;
