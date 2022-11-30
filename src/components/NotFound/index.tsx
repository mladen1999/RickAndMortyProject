const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh_-_122px)] bg-slate-200 pt-10">
      <div className="flex w-[100%] justify-center bg-slate-200">
        <div className="w-[80%] flex-wrap items-center justify-center text-center">
          <h1 className="">ERROR:</h1>

          <h3 className="">This character doesn't exist in our database!</h3>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
