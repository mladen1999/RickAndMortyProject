const Card = ({ id, name, image }: any) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden h-25 w-25 ml-3 mr-3 round-10">
      <img className="w-full" src={image} alt={name} />
      <div className="font-bold text-xl mb-2 text-center pt-5 pb-10">
        {name}
      </div>
    </div>
  );
};

export default Card;
