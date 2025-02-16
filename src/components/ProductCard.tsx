
import React from "react";
import useProduct from "../hooks/useProduct"
import { createContext } from "react"
import { ProductsContextProps, Props } from "../interfaces/products.interface"
import styles from  "../styles/styles.module.css"



export const ProductContext = createContext({} as ProductsContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children, className, style, onChange, value, initialValue }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
        onChange,
        product,
        value,
        initialValue,


    })

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div style={style} className={`${styles.productCard} ${className} `}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount,
                    product,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>

    )
}
export default ProductCard

