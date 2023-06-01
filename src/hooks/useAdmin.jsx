import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('isAdmin Response', response)
            return response.data.admin
          },
      })

      return [isAdmin, isAdminLoading]
}

export default useAdmin;