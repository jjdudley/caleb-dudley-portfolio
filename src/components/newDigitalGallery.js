import React from "react"
import Img from "gatsby-image"
import useDigitalGallery from "../hooks/useDigitalGallery"
import "./styles.css"

const NewDigitalGallery = () => {
    const images = useDigitalGallery()

    return (
        <div className="gallery">
            {images.map(({ id, fluid }) => (
                <Img key={id} fluid={fluid} />
            ))}
        </div>
    )
}

export default NewDigitalGallery