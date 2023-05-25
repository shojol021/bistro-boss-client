import Cover from "../shared/Cover";
import coverImg from '../../assets/shop/banner2.jpg'

const Order = () => {
    return (
        <div>
            <Cover img={coverImg} para={"Would you like to try a dish?"} title={"Our Shop"}></Cover>
        </div>
    );
};

export default Order;