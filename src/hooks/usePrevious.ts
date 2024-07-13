// Make a hook called as usePrevious that can track the previous value of a state variable.

import { useEffect, useRef } from "react";

export default function usePrevious<T>(count: T): T | undefined {

    const prevRef = useRef<T | undefined>();

    useEffect(() => {
        prevRef.current = count;
    }, [count])

    return prevRef.current;
}