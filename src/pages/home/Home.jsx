import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Bg from "./Bg";
import Featured from "./Featured";
import PopularItems from "./PopularItems";
import Recommend from "./Recommend";
import SwiperItems from "./SwiperItems";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <SwiperItems></SwiperItems>
            <Bg></Bg>
            <PopularItems></PopularItems>
            <Recommend></Recommend>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;