"use client"
import { useAuthorization } from '@/app/hooks/useAuthorization';
import {
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import MenuButton from "../menuButton/MenuButton";
import { YellowLine } from "../yellowLine/YellowLine";

const Clock = () => {
  const [shift, setShift] = useState(true);
  const { callApiWithToken } = useAuthorization();
  
  const handleShift = (shift:boolean) => {
    callApiWithToken({
      method: "GET",
      url: "/roles"
    });
    setShift(!shift);
  };

  const START_SHIFT = 'Iniciar turno';
  const END_SHIFT = 'Finalizar turno';
  
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
            onClick={() => handleShift(shift)}
          >{shift ? START_SHIFT : END_SHIFT }
          </Button>
        </div>
      </div>
    </>
  );
};

export default Clock;
