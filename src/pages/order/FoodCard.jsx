import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const FoodCard = ({item, img, name, recipe}) => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleOrder = () => {
        console.log(item)
        if(user){
            fetch('http://localhost:5000/cart')
            .then(res => res.json())
            .then(data => {
                if(data.insertedId > 0){
                    Swal.fire({
                        icon: 'success',
                        text: 'Ited added Successfull'
                    })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login',
                text: "You have to login first to add to cart",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }

    return (
        <div className="card w-88 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleOrder} className="btn btn-outline border-0 border-b-4 text-yellow-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;