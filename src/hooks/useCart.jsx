import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/cart?email=${user?.email}`)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;