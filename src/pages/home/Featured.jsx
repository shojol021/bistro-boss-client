import SectionTitle from "../shared/SectionTitle";
import img from '../../assets/home/featured.jpg'
import './home.css'


const Featured = () => {
    return (
        <section className="image-blend text-white bg-fixed">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'Featured Item'}></SectionTitle>

            <div className="md:flex justify-center items-center py-8 px-28">
                <img className="w-[400px] md:me-6" src={img} alt="" />
                <div>
                    <p >March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia debitis alias, ipsa laudantium eaque beatae necessitatibus quos nulla? Architecto quidem rerum odit exercitationem eligendi explicabo beatae voluptas commodi mollitia labore!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>

        </section>
    );
};

export default Featured;