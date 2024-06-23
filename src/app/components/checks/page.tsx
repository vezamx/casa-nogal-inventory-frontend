import { BackArrow } from "../backArrow/BackArrow";
import MenuBar from "../menuBar/MenuBar";

const page = () => {
  return (
    <div className="bg-gray-400">
    <MenuBar />
    <div className="h-12 max-w-full bg-yellow-400 mt-0">
      <div className="p-1">
        <BackArrow />
      </div>
    </div>
    <div className="h-96 w-1/2 bg-slate-200 mt-0">
    </div>
    </div>
  )
}

export default page;