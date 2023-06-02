import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../shared/SectionTitle";
import { useForm } from 'react-hook-form';

const image_hosting_token = import.meta.env.VITE_ImageBB_Key

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        const formData = new FormData
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {method: 'POST', body: formData})
        .then(res => res.json())
        .then(imageRes => {
            console.log(imageRes)
            if(imageRes.success){
                const imgUrl = imageRes.data.display_url
                const {category, name, price, recipe} = data;
                const newItem = {category, name, price: parseFloat(price), recipe, image: imgUrl}
                console.log(newItem)
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            }
        })

    };

    return (
        <div className="w-full p-12">
            <SectionTitle subHeading={"What's new"} heading={"Add an item"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input {...register("name", { required: true, maxLength: 80 })} type="text" placeholder="Recipe name" className="input input-bordered w-full " />
                </div>
                <div className="flex space-x-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Choose a category" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled >Choose a category</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Deshi</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
                </div>
                <div className="form-control w-full max-w-xs mb-5">
                    <label className="label">
                        <span className="label-text">Choose a file</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input type="submit" value="Add Item" className="btn" />
            </form>
        </div>
    );
};

export default AddItem;