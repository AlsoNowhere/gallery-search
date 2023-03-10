import React, { useContext } from "react";
import { AsideContext, AsideProvider } from "../../contexts/Aside.context";

// import { useDispatch, useSelector } from "react-redux";

// import { updateSideBar } from "../../slices/aside.slice";

export const Header = () => {

    // const sideBarState = useSelector(state => state.aside.sideBarState);
    // const { zoom } = useSelector(state => state.zoom);

    // const dispatch = useDispatch();

    // const toggleSideBar = () => {
    //     dispatch(updateSideBar(sideBarState === "" ? "active": ""));
    // }

    const dispatch = useContext(AsideContext);
    const state = useContext(AsideProvider);

    return (
        <header>
            <h1>Lightbox gallery</h1>

            <div>
                {/* {zoom !== 100 && (<p>{zoom}%</p>)} */}

                <button type="button"
                    onClick={() => dispatch({ type: state.asideOpen ? "close-aside" : "open-aside" })}>
                    <span className={`fa fa-arrow-left ${state.asideOpen ? "active" : ""}`}></span>
                </button>
            </div>
        </header>
    )
}
