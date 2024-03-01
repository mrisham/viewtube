import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "Mixes",
    "Recents",
    "Javascript",
    "Music",
    "UPSC",
    "News",
    "Comedy",
    "Live",
    "SharkTank",
    "Bhajan",
    "Computer",
    "Short",
    "Vedio",
    "Live",
  ];
  return (
    <div className="flex">
      {list.map((btnText, index) => (
        <Button name={btnText} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
