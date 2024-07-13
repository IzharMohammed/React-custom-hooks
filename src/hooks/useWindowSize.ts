// Make a hook called as useWindowSize that tracks the dimensions of the browser window.
//Article link :- https://www.geeksforgeeks.org/how-to-detect-when-the-window-size-is-resized-using-javascript/

import { useState } from "react";

function useWindowSize() {
    const [size, setSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })


    window.onload = function () {
        setSize(
            {
                height: window.innerHeight,
                width: window.innerWidth
            }
        )
    }

    window.onresize = function () {
        setSize(
            {
                height: window.innerHeight,
                width: window.innerWidth
            }
        )
    }

    return [size.height, size.width]
}

export default useWindowSize;