const B = ({ isObserved }) => {
  return (
    <div
      className={`${
        isObserved ? "bg-yellow-300" : "bg-yellow-100"
      }  min-h-screen flex justify-center items-center text-4xl`}
    >
      B
    </div>
  );
};

export default B;
