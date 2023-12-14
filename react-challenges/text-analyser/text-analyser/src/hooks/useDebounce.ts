import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number) => {
    const [debouncedValue, setValue] = useState<T>(value);

    useEffect(() => {
        console.log('useDebounce', value, delay);

        const handler = setTimeout(() => {
            setValue(value)
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay] )

    return debouncedValue;
}

export default useDebounce;