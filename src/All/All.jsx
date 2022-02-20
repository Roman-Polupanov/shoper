import Header from "../components/header/Header";
import { All_container } from "./All.styles";
import Sortbar from "../components/sortbar/sortbar";

const All = () => {
  return (
    <All_container>
      <Header />
      <Sortbar />
    </All_container>
  );
};

export default All;
