"use client"

import axios from "axios";
import { createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from "react";




type GlobalDataType = {
    data: string;
    setData: React.Dispatch<SetStateAction<string>>;
    user: object;
    setUser: object;
    loading: boolean;
    dropdown1: boolean;
    setLoading: React.Dispatch<SetStateAction<boolean>>;
    setDropdown1: React.Dispatch<SetStateAction<boolean>>;
    setUserId: Dispatch<SetStateAction<string>>;
    cart: object;
    setCart: object;
    productCart:object;
    setProductCart:object;
};
  
  const GlobalDataStore = createContext<GlobalDataType | null>(null);
  

export const GlobalDataProvider = ({children}: {children: React.ReactNode}) => {
    const [data, setData] = useState('');
    const[user,setUser] = useState([]);
    const[cart,setCart] = useState([])
    const[userId,setUserId] = useState('');
    const[loading,setLoading] = useState(false);
    const [dropdown1, setDropdown1] = useState(true);
    const [productCart, setProductCart]:any = useState({
        productPrice:"",
        productVarient:"",
        productColur:""
    })
   
   useEffect(() => {
     axios.get(`/api/auth/user?id=${userId}`).then(response => setUser(response.data)).catch(error => console.log("please sign in"));
     console.log(userId)
   }, [userId])
   useEffect(() => {
     const tokan = document.cookie;
     console.log(tokan,"user")
   }, [])
   
    

    return (
        <GlobalDataStore.Provider value={{cart,setCart, data,setUserId, setData, user, setUser,loading,setLoading,dropdown1,setDropdown1,productCart, setProductCart }}>
        {children}
    </GlobalDataStore.Provider>
    
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalDataStore);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalDataProvider');
    }
    return context;
}
