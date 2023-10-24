import { ContainerBox } from "./components/ContainerBox/ContainerBox";
import { NavBar } from "./components/NavBar/NavBar";
import { UserWidget } from "./components/UserWidget/UserWidget";

export const App = () => {
  return (
    <>
      <NavBar />
      <ContainerBox message={"Hola Bienvenidos a mi proyecto"} />
    </>
  );
};
