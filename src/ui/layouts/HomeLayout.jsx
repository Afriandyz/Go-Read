import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Activities from "../components/Activities";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Activities />
      <Navbar />
    </div>
  );
};

export default HomeLayout;
