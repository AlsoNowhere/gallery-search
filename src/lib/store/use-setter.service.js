import { useState, useEffect } from "react";

export const useSetter = (store) => {
    const setter = useState({})[1];
    useEffect(() => {
        store.setter = () => setter({});
        return () => store.setter = null;
    }, [store, setter]);
}
