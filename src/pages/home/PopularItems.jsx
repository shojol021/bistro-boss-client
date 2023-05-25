
import SectionTitle from '../shared/SectionTitle';
import MenuItem from '../shared/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopularItems = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className='my-12'>
            <SectionTitle subHeading={'Check it out'} heading={'From our menu'}></SectionTitle>
            <div className='grid md:grid-cols-2 w-11/12 mx-auto space-y-2 gap-4 mb-12'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mb-16'>
                <button className="btn btn-outline border-0 border-b-4 text-yellow-600">Add to Cart</button>
            </div>
        </section>
    );
};

export default PopularItems;