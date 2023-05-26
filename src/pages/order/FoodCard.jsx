

const FoodCard = ({img, name, recipe}) => {

    return (
        <div className="card w-88 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 text-yellow-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;