"use client";
import { YellowLine } from "@/app/components/yellowLine/YellowLine";
import MenuBar from "../../components/menuBar/MenuBar";
import { SidebarLeft } from "../../components/sideBars/SidebarLeft";
import { Viewport } from "next";
import { Button } from "@chakra-ui/react";
import { useAuthorization } from "@/app/hooks/useAuthorization";

export const viewport: Viewport = {
  themeColor: "black",
};
const Page = () => {
  const { callApiWithToken } = useAuthorization();
  return (
    <div className="min-h-screen min-w-screen flex row-auto">
      <div className="w-3/4 bg-gray-100">
        <div>
          <MenuBar menuButton />
        </div>
        <div className="w-full flex flex-end">
          <YellowLine searchData />
        </div>
        <main className="flex-auto">
          <Button
            onClick={() => {
              callApiWithToken({
                method: "GET",
                url: "/roles",
              });
            }}
          >
            Mostrar modal de autorizacion
          </Button>
        </main>
      </div>

      <section className="flex-auto w-max">
        <SidebarLeft />
      </section>
    </div>
  );
};

export default Page;
