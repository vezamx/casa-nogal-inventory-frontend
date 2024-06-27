import { YellowLine } from "@/app/components/yellowLine/YellowLine";
import MenuBar from "../../components/menuBar/MenuBar";
// import { SideBarRigth } from "../../components/sideBars/SideBarRigth";
import { SidebarLeft } from "../../components/sideBars/SidebarLeft";

const Page = () => {
  return (
    <div className="min-h-screen min-w-screen flex row-auto">
      <div className="w-3/4 bg-gray-100">
        <div>
          <MenuBar
            menuButton
          />
        </div>
        <div className="w-full flex flex-end">
          <YellowLine
            searchData
          />
        </div>
      </div>
      <div className="flex-auto w-max">
        <SidebarLeft />
      </div>
    </div>
  );
};

export default Page;
