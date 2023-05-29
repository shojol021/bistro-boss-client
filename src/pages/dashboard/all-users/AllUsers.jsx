import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleDelete = (id) => {

    }

    const handleMakeAdmin = (id, name) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${name} Successfully Made Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className="my-12 px-12 w-full">
            <h3 className="font-semibold h-16 text-4xl">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'Admin' :
                                            <button onClick={() => handleMakeAdmin(user._id, user.name)} className="btn btn-ghost btn-sm py-2 bg-orange-300 text-white"><FaUserShield></FaUserShield></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-sm bg-red-700 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;