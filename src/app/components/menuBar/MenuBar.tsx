import MenuButton from "../menuButton/MenuButton";

const MenuBar = ({ menuButton = false }) => {
  return (
    <>
      <div className="h-1/6 max-w-full bg-customGray">
        {menuButton && <MenuButton />}
      </div>
    </>
  );
};

export default MenuBar;
