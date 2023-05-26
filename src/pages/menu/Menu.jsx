import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import img from '../../assets/menu/banner3.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import SectionTitle from '../shared/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={img}
                title={"our menu"}
                para={'Would you like to try a dish'}
            ></Cover>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={'Todays offer'}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <Cover
                img={dessertImg}
                title={"dessert"}
                para={'Indulge in our Divine Delights Dessert Collection - a symphony of sweetness, blending velvety chocolates and delicate fruit-infused creations. Experience dessert bliss like never before.'}
            ></Cover>
            <MenuCategory items={dessert} title={"dessert"}></MenuCategory>
            <Cover
                img={pizzaImg}
                title={"pizza"}
                para={'Choose Your favourite Pizza'}
            ></Cover>
            <MenuCategory items={pizza} title={"pizza"}></MenuCategory>
            <Cover
                img={saladImg}
                title={"salad"}
                para={'A refreshing medley of crisp lettuce, juicy cherry tomatoes, crunchy cucumbers, and vibrant bell peppers, tossed with a tangy twist of sliced red onions. The Garden Delight Salad is a burst of freshness in every bite'}
            ></Cover>
            <MenuCategory items={salad} title={"salad"}></MenuCategory>
            <Cover
                img={soupImg}
                title={"soup"}
                para={'Savor the richness of flavor and comforting warmth with our delectable selection of soups. From hearty classics to inventive creations, each spoonful of our soups promises a delightful journey of taste and comfort. Discover the perfect bowl to soothe your soul at our website.'}
            ></Cover>
            <MenuCategory items={soup} title={"soup"}></MenuCategory>
        </div>
    );
};

export default Menu;