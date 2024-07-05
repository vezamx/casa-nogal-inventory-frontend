import Image from "next/image";
import { YellowLine } from "../yellowLine/YellowLine";

const Clock = () => {
  return (
    <>
      <div className="h-12 max-w-full bg-customGray mb-0">
        <button>
          <Image
            className="ml-2 *flex items-start"
            src="/hamburguerMenu.svg"
            alt="clock"
            width={50}
            height={50}
          />
        </button>
        <YellowLine />
        <div className="flex items-center justify-center h-screen flex-col">
          <p className="text-9xl text-white">12:00</p>
          <button className="bg-yellow-500 rounded-lg p2 text-md text-white/60 drop-shadow-xl font-semibold w-64 h-24 text-xl">
            Comenzar Turno
          </button>
        </div>
      </div>
    </>
  );
};

export default Clock;
