import React from "react"
import "./FirstPage.css"
import Header from "../../../components/Header/Header"
import FooterThree from "../../../components/Footers/FooterThree/FooterThree"
import Caixagreen from "../../../components/Caixagreen/Caixagreen";



const FirstPageOng  = () => {
    return(
        <main>
            <Header/>
            <br></br>
            <br></br>
            <br></br>
            
        <div className="molduramedicosemfornt">
            <Caixagreen imgsrc="/Medicosemfront.png"/>
        </div>
            <br>
            </br>
        </main>
    )
}

export default FirstPageOng