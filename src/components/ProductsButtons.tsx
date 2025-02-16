import React, { CSSProperties, useCallback, useContext } from "react"
import styles from "../styles/styles.module.css"
import { ProductContext } from "./ProductCard"


interface Props {
    className?: string
    style?: CSSProperties
}




export const ProductButtons = ({ className, style }: Props) => {
    const { increaseBy, counter, maxCount } = useContext(ProductContext)

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    )


    return (
        <div style={style} className={`${styles.buttonsContainer} ${className}`}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
            <div className={`${styles.countLabel}   ${isMaxReached() && styles.disabled}`}>{counter}</div>
            <button onClick={() => increaseBy(+1)} className={`${styles.buttonAdd}   ${isMaxReached() ? styles.disabled : ""}`}>+</button>
        </div>
    )
}