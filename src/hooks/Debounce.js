import { useEffect, useState } from 'react';

function UseDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(value);
        }, delay);
        console.log(timeout);

        return () => clearTimeout(timeout);
    }, [value]);

    return debounce;
}

export default UseDebounce;
