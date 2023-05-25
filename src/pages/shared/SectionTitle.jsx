
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mt-12">
            <p className="text-yellow-500">---{subHeading}---</p>
            <h3 className="text-3xl border-y-2 md:w-1/3 mx-auto py-4 mb-8 mt-2 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;