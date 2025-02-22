import React, { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css"

interface Props {
    title?: string
    className?: string
    style?: CSSProperties
}



export const ProductTite = ({ title, className, style }: Props) => {
    const { product } = useContext(ProductContext)


    return <span style={style} className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>
}