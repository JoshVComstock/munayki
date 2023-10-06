import { useState,useEffect } from "react"
const urlback = import.meta.env.VITE_BACKEND_URL;
export const usePost = async(url,body)=>{
    const res= await fetch(`${urlback+url}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body),
    });
    if(res.ok){
        return res.json();
    }
}