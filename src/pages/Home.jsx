import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
      <div className="bg-banner bg-gray-800  bg-cover min-h-screen">
            <Navbar></Navbar>
            <Banner></Banner>
      </div>
    );
};

export default Home;