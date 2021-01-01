// import React, { useState } from "react"
// import Img from "gatsby-image"
// import useAnalogGallery from "../hooks/useAnalogGallery"
// import "./styles.css"

// function AnalogGallery (props) {
//     const [isActive, setActive] = useState(false);

//     const toggleClass = () => {
//         setActive(!isActive)
//     }
//     const images = useAnalogGallery()

//     return (
//         <div className="gallery">
//             {images.map(({ id, fluid }) => (
//                 <div  className={isActive ? "modal-on" : "modal-off"} onClick={toggleClass}>
//                     <Img  key={id} fluid={fluid} className={isActive ? "modal-img" : ""}/>
//                 </div>
                
//             ))}
//         </div>
//     )
// }

// export default AnalogGallery