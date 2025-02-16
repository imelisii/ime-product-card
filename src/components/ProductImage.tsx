import React, { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import noImage from "../assets/no-image.jpg"
import styles from "../styles/styles.module.css"


interface Props {
    img?: string
    className?: string
    style?: CSSProperties

}


export const ProductImage = ({ className, img, style }: Props) => {

    const { product } = useContext(ProductContext)
    let imgToShow: string
    if (img) {
        imgToShow = img
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }
    return (
        <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt="Coffie Mug" />
    )
}