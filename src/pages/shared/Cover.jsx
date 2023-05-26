import { Parallax } from 'react-parallax';

const Cover = ({ img, title, para }) => {
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={img}
            bgImageAlt=""
            strength={-300}
        >

            <div className="hero h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w- bg-black bg-opacity-20 px-28 py-12">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{para}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;