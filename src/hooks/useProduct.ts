import { useEffect, useRef, useState } from "react";
import { InitualValues, onChangeArgs, Product } from '../interfaces/products.interface';


interface userProductArgs {
    product: Product
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValue?: InitualValues
}




const useProduct = ({ product, onChange, value = 0, initialValue }: userProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValue?.count || value);
    const isControlled = useRef(!!onChange)
    const isMounted = useRef(false)



    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0)

        if (initialValue?.maxCount) {
            newValue = Math.min(newValue, initialValue?.maxCount)
        }



        if (isControlled.current) {
            return onChange!({ count: value, product })
        }

        setCounter(newValue)
        onChange && onChange({ count: newValue, product })
    }


    const reset = () => {
        setCounter(initialValue?.count || value)
    }




    useEffect(() => {
        if (!isMounted.current) return
        setCounter(value)
    }, [value])








    return {

        counter,
        increaseBy,
        isMaxCountReached: !!initialValue?.maxCount && initialValue.maxCount === counter,
        maxCount: initialValue?.maxCount,
        reset
    }


}

export default useProduct