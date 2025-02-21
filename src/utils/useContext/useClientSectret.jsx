import { createContext, useState } from "react"

export const CreateClient = createContext()
const CreateClientSecret = ({ children }) => {
   const [clientSecret, setClientSecret] = useState()

   return (
      <CreateClient.Provider value={{ clientSecret, setClientSecret }}>
         {children}
      </CreateClient.Provider>
   )
}
export default CreateClientSecret
