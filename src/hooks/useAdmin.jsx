import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const { refetch, data: isAdmin = [] } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            return response.json()
          },
      })

      return [isAdmin, refetch]
}

export default useAdmin;