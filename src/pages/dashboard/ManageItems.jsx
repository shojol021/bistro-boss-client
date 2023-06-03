
import { FaTrashAlt } from 'react-icons/fa';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../shared/SectionTitle';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "Your item will be removed from the cart",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data)
                        refetch()
                        if(res.data.deletedCount){
                            Swal.fire(
                                'Item removed!',
                                'Your item has been removed from the cart.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className='w-full'>
            <SectionTitle heading={'Manage all items'} subHeading={'Hurry up!'}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, idx) => <tr key={item._id}>
                                <td>{idx + 1} </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-sm bg-red-700 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;