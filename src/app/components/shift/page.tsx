import {
  Button,
} from "@chakra-ui/react";
import MenuButton from "../menuButton/MenuButton";
import { YellowLine } from "../yellowLine/YellowLine";

const Clock = () => {
  return (
    <>
      <div className="h-12 min-w-full bg-customGray mb-0">
        <MenuButton />
        <YellowLine />
        <div className="flex items-center justify-center h-screen flex-col">
          <p className="text-9xl text-black">12:00</p>
          <Button
            colorScheme='yellow'
            height='6vh'
            width='17vw'
            color='white'
          >
            Iniciar Turno
          </Button>
        </div>
      </div>
    </>
  );
};

export default Clock;
