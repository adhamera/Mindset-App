import React from "react";
import "./index.css";

const footerStyle = {
    fontSize: "20px",
    color: "white",
    margin: "20px",
    textAlign: "center",
};

const ptag = {
    textAlign: "center",
    color: "white",
};
 
function Footer(){    
        return (
            <div className='gradient-bg' style={{minHeight: "15vh"}}>
                <footer className="footer">
                        <h1 style={footerStyle}>Made with ❤️️ in Minnesota</h1>
                        <p style={ptag}>
                            By Lierin Hanuman, Foos Mahamud, James Jorissen, Isabell Danell, Anusha
                            Dhamera and Jorge Calderon
                        </p>
                </footer>
            </div>
        );
}

export default Footer;
