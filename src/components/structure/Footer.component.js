import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

import { FooterThumbnail } from "../widgets/FooterThumbnail.component";

import { getThumbnails } from "../../services/get-thumbnails.service";

// import { addThumbnail, updateThumbnailImageDetails } from "../../slices/thumbnail.slice";

export const Footer = () => {

    const [imageThumbnails, setImageThumbnails] = useState([]);

    // const imageThumbnails = useSelector(state => state.imageThumbnails);
    // const mainImage = useSelector(state => state.mainImage);
    // const searchModal = useSelector(state => state.searchModal);

    // const dispatch = useDispatch();

    useEffect(() => {
        getThumbnails(setImageThumbnails);
    }, []);

    console.log("Images: ", imageThumbnails);

    return (
        <footer>
            <ul>
                {imageThumbnails
                    // .filter(x => searchModal.query === null || (x.metadata && x.metadata.toLowerCase().includes(searchModal.query.toLowerCase())))
                    .map(thumbnail => (
                        <li
                        // className={mainImage.currentId === thumbnail.id ? "active" : ""}
                            key={thumbnail.id}
                            >
                            <FooterThumbnail thumbnail={thumbnail} />
                        </li>
                    ))}
            </ul>
        </footer>
    )
}
