import { CSSProperties } from "react"

export interface Props {
    product: Product,
    children: (arg: ProductCartHandlers) => JSX.Element,
    className?: string
    style?: CSSProperties
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValue?: InitualValues
}

export interface InitualValues {
    count?: number
    maxCount?: number
}

export interface Product {
    id: string
    title: string
    img?: string
}




export interface ProductsContextProps {
    counter: number
    product: Product
    increaseBy: (value: number) => void
    maxCount?: number
}

export interface onChangeArgs {
    product: Product
    count: number
}


export interface ProductInCart extends Product {
    count: number
}
export interface ProductCartHandlers {
    count: number
    isMaxCountReached: boolean
    maxCount?: number
    product: Product

    increaseBy: (value: number) => void
    reset: () => void
}



