import { useState } from "react"

const Client =()=>{
    const[nom,setNom]=useState("Essat")
    const[ville,setVille]=useState("Gabes")
    const[adresse,setAdresse]=useState("route aeroport")
    
    const handlechangeNom=(e)=>{
        setNom(e.target.value)
    }
    return(
        <>
        <h2>wlc to Client</h2>
        <h2>le nom est : {nom}</h2>
        <h2>la ville est : {ville}</h2>
        <h2>adresse est : {adresse}</h2>
        <button className="btn btn-success" onClick={()=>setNom("Essat Gabes")}>Modifier</button>
        </>

        
    )
}
export default Client