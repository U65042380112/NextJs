import Footer from "../Components/Footer"
import { Headerone,Headertwo } from "../Components/Header"
import Link from "next/link"
export default function Profile()

{
    return(
        <>
        <br/>
        <Headerone/>
        <br/>
        <h1 style={{textAlign:"center",fontSize:35}}>Profile</h1>
        <br/>
        <Footer/>
        </>
    )

}