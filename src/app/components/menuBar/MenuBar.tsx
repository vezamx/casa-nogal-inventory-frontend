import MenuButton from "../menuButton/MenuButton";

const MenuBar = ({ menuButton = false }) => {
  return (
    <>
      {menuButton ? (
        <div className="h-12 max-w-full bg-customGray">
          <MenuButton />
        </div>
      ) : (
        <div className="h-12 max-w-full bg-customGray"></div>
      )}
    </>
  );
};

export default MenuBar;

