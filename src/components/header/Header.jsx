import { Label_name, Line, Navi_list } from "./Header.styles";
import { Navi_all } from "./Header.styles";
import { Navi_link } from "./Header.styles";
import { Navi_favor } from "./Header.styles";
import { Head_wrap } from "./Header.styles";

const Header = () => {
  return (
    <Head_wrap>
      <Navi_list>
        <Label_name>Donuts</Label_name>
        <Navi_all as="a" href="/">
          All
        </Navi_all>
        <Navi_favor as="a" href="/favorites">
          Favorites
        </Navi_favor>
        <Navi_link as="a" href="/cart">
          Cart
        </Navi_link>
      </Navi_list>
      <Line />
    </Head_wrap>
  );
};

export default Header;
