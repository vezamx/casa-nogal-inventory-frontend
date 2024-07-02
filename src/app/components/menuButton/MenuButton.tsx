import Image from "next/image";

const MenuButton = () => {
  return (
    <>
      <button>
          <Image
            className="ml-2 *flex items-start"
            src="/hamburguerMenu.svg"
            alt="clock"
            width={50}
            height={50}
          />
        </button>
    </>
  )
}

export default MenuButton