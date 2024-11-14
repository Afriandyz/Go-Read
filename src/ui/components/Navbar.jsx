import HomeIcons from '../../assets/img/Homeicons.png'
import WhitelistIcons from '../../assets/img/WhitelistIcons.png'
import BagIcons from '../../assets/img/BagIcons.png'
import ProfileIcons from '../../assets/img/ProfileIcons.png'

const Navbar = () => {
  return (
    <nav className="bg-[#CCCCCC] container px-3 py-2 absolute bottom-0">
      <div className="flex justify-between p-3">
        <img src={HomeIcons} alt="" />
        <img src={WhitelistIcons} alt="" />
        <img src={BagIcons} alt="" />
        <img src={ProfileIcons} alt="" />
      </div>
    </nav>
  );
}

export default Navbar