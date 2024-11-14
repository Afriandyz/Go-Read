import Logo from "../../assets/img/Logo.png";
import Menu from "../../assets/img/Menu.png";
import Search from "../../assets/img/Search.png";

const Header = () => {
  return (
    <header className="container px-3 py-2">
      <div className="image flex items-center justify-between p-3 border-b border-b-[#CCCCCC]">
        <img src={Menu} alt="" />
        <img src={Logo} alt="" />
        <img src={Search} alt="" />
      </div>
    </header>
  );
};

export default Header;
