import SectionTitle from "../shared/SectionTitle";


const Recommend = () => {
    return (
        <section className="mb-12">
            <SectionTitle subHeading={'Should try'} heading={'Chef Recommends'}></SectionTitle>
            <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto">
                <div className="card w-88 bg-base-100 shadow-xl">
                    <figure><img src="https://i.postimg.cc/vHyfDmSq/photo-1512621776951-a57141f2eefd.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4 text-yellow-600">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-88 bg-base-100 shadow-xl">
                    <figure><img src="https://i.postimg.cc/vHyfDmSq/photo-1512621776951-a57141f2eefd.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4 text-yellow-600">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-88 bg-base-100 shadow-xl">
                    <figure><img src="https://i.postimg.cc/vHyfDmSq/photo-1512621776951-a57141f2eefd.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4 text-yellow-600">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommend;