import Cover from "../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import coverImg from '../../assets/shop/banner2.jpg'
import useMenu from "../../hooks/useMenu";
import FoodCard from "./FoodCard";
import { useParams } from "react-router-dom";

const Order = () => {
    const [menu] = useMenu()
    const {id} = useParams()
    console.log(id)
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    const foods = [salad, pizza, soup, dessert, drinks]

    return (
        <div>
            <Cover
                img={coverImg}
                para={"Would you like to try a dish?"}
                title={"Our Shop"}
            ></Cover>
            <Tabs className="my-12 w-11/12 mx-auto">
                <TabList className="text-center mb-4 mt-24">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                {
                    foods.map((food, idx) => <TabPanel key={idx}
                    ><div className="grid md:grid-cols-3 gap-6">
                            {food.map((item, idx) => <FoodCard
                                key={idx}
                                img={item.image}
                                name={item.name}
                                recipe={item.recipe}
                                item={item}>
                            </FoodCard>)}
                        </div>
                    </TabPanel>)
                }
            </Tabs>
        </div>
    );
};

export default Order;