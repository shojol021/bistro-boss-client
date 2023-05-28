import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from '@tanstack/react-query'

const useCart = () => {
    const {user} = useContext(AuthContext)

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            return response.json()
          },
      })

      return [cart, refetch]

};

export default useCart;