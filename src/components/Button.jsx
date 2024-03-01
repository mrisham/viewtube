const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="px-4 py-2 m-3 rounded-md bg-gray-300 text-black">
        {name}
      </button>
    </div>
  );
};

export default Button;
