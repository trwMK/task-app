import Button from "./Button";

const Header = () => {
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <header className="header">
      <h1>Task tracker App</h1>
      <Button color="green" onClick={handleClick}>
        Add
      </Button>
    </header>
  );
};

export default Header;
