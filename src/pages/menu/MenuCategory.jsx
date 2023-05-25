import MenuItem from "../shared/MenuItem";


const MenuCategory = ({items}) => {
    return (
        <div className="my-12">
            <div className='grid md:grid-cols-2 w-11/12 mx-auto space-y-2 gap-4 mb-12'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mb-16'>
                <button className="btn btn-outline border-0 border-b-4 text-yellow-600">Order Your Favourite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;