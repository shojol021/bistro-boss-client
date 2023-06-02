import SectionTitle from "../shared/SectionTitle";
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors);
    return (
        <div className="w-full p-12">
            <SectionTitle subHeading={"What's new"} heading={"Add an item"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input {...register("name", {required: true, maxLength: 80})} type="text" placeholder="Recipe name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select {...register("category", { required: true })} className="select select-bordered">
                        <option disabled selected>Choose a category</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Dessert</option>
                        <option>Drinks</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Choose a file</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" value="Add Item" className="btn" />
            </form>
        </div>
    );
};

export default AddItem;