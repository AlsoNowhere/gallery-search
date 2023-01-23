import React, { useContext } from "react";
import { AsideProvider } from "../../contexts/Aside.context";

// import { useSelector, useDispatch } from "react-redux";

import { asideOptions } from "../../data/aside-options.data";

const hiddenButtons = [];
const activeButtons = [];

export const Aside = () => {

    // const imageThumbnails = useSelector(state => state.imageThumbnails);
    // const { sideBarState, activeButtons, hiddenButtons } = useSelector(state => state.aside);
    // const selectImages = useSelector(state => state.selectImages);
    // const { showFlags } = useSelector(state => state.flags);
    // const { showStars } = useSelector(state => state.stars);
    // const { zoom } = useSelector(state => state.zoom);

    // const dispatch = useDispatch();

    // const state = {
    //     dispatch,
    //     sideBarState,
    //     selectImages,
    //     activeButtons,
    //     imageThumbnails,
    //     showFlags,
    //     showStars,
    //     zoom
    // };

    const state = useContext(AsideProvider);

    return (
        <aside
        className={state.asideOpen ? "active": ""}
        >
            <ul>
                {asideOptions
                    .filter(({ id }) => !hiddenButtons.includes(id))
                    .map(({ id, action, icon, label }, index) => (
                        <li key={index}>
                            <button type="button"
                                className={activeButtons.includes(id) ? "active" : ""}
                                onClick={() => action?.()}>
                                <span className={`fa fa-${icon}`}></span>

                                <span>{label}</span>
                            </button>
                        </li>
                    ))}
            </ul>
        </aside>
    );
}
