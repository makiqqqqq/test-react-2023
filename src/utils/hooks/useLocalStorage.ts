import {useEffect, useState} from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    const removeValue = () => {
        localStorage.removeItem(key);
        setValue(initialValue);
    };

    return [value, setValue, removeValue] as const;
};

export default useLocalStorage;
