"use client";
import { FC, useMemo } from "react";
import { ForbiddenErrorScreen } from "../components/errors/ErrorsScreens";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const token = useMemo(() => {
    return window.localStorage.getItem("qid");
  }, []);

  if (!token)
    return <ForbiddenErrorScreen message="No tienes acceso al contenido" />;

  return <>{children}</>;
};

export default Layout;
