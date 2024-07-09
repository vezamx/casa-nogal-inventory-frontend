import MenuButton from "@/app/components/menuButton/MenuButton"
import { YellowLine } from "@/app/components/yellowLine/YellowLine"

const home = () => {
  return (
    <div className="min-w-full bg-customGray mb-0">
      <div>
        <MenuButton />
      </div>
      
      <YellowLine />
    </div>
  )
}

export default home