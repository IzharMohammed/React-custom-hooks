// Make a hook called as useLocalStorage that helps us to add or remove key value pair in localstorage.

import { useState } from "react";

function useLocalStorage(key: string, initialValue: string | boolean | number = '') {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.stringify(item) : initialValue
        } catch (error) {
            return error;
        }
    });

    function set(item: number | string | boolean) {
        localStorage.setItem(key, `${item}`);
        setStoredValue(JSON.stringify(item));
    }

    function remove() {
        localStorage.removeItem(key);
        setStoredValue(initialValue);
    }

    return [set, storedValue, remove];
}

export default useLocalStorage;