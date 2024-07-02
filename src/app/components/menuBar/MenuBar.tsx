import MenuButton from "../menuButton/MenuButton";

const MenuBar = ({menuButton = false}) => {
  return (
    <>
    {
      menuButton
        ? <div className='h-12 max-w-full bg-gray-500'>
            <MenuButton
            />
          </div>
        : <div className="h-12 max-w-full bg-gray-500"></div>
    }
    
    </>
  )
}

export default MenuBar