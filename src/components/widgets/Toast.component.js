import React, { useEffect } from "react";

import { useSetter } from "../../lib/store/use-setter.service";

import { toastStore } from "../../stores/toast.store";

const closeToast = () => toastStore.showToast = false;

export const Toast = () => {

    // const setter = useState({})[1];
    // toastStore.setter = () => setter({});
    // useEffect(() => () => toastStore.setter = null, []);
    useSetter(toastStore);

    const { showToast, message } = toastStore;

    useEffect(() => {
        if (!showToast) {
            return;
        }
        clearTimeout(toastStore.timeout);
        toastStore.timeout = setTimeout(() => {
            toastStore.showToast = false;
        }, 3000);
    }, [showToast]);

    return (
        <>
            {showToast && (
                <section className="toast-widget"
                    onClick={closeToast}>
                    <button type="button">
                        <span className="fa fa-times"></span>
                    </button>

                    <p>{message}</p>
                </section>
            )}
        </>
    )
}
