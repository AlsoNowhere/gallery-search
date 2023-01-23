import React, { useReducer } from "react";

// import { useSelector } from "react-redux";

import { Header } from "./structure/Header.component";
import { Aside } from "./structure/Aside.component";

import { AsideContext, AsideProvider, initialData } from "../contexts/Aside.context";

import { asideReducer } from "../reducers/aside.reducer";

import { Footer } from "./structure/Footer.component";

// import { Loading } from "./common/Loading.component";
// import { SearchModal } from "./widgets/SearchModal.component";
// import { Toast } from "./widgets/Toast.component";
// import { FlickrSimilarImages } from "./widgets/FlickrSimilarImages.component";

// const imageStyles = (aspectRatio, zoom) => {
// 	const styles = {};
// 	const ratio = window.innerWidth / window.innerHeight;
// 	const percent = zoom;
// 	styles[aspectRatio > ratio ? "width" : "height"] = `${percent}%`;
// 	return styles;
// }

export const App = () => {

	// const mainImage = useSelector(state => state.mainImage);
	// const { modalState } = useSelector(state => state.flickr);
	// const { zoom } = useSelector(state => state.zoom);

	const [state, dispatch] = useReducer(asideReducer, initialData);
	
	return (
		<>
			<AsideContext.Provider value={dispatch}>
				<AsideProvider.Provider value={state}>
					<Header />

					<Aside />
				</AsideProvider.Provider>
			</AsideContext.Provider>

			<main>
				{/* {mainImage.src
					? (
						<img src={mainImage.src} alt={mainImage.alt} style={imageStyles(mainImage.aspectRatio, zoom)} />
					)
					: (
						<div className="default-text">
							<span>Select an image to show it here</span>
						</div>
					)}
				<Loading state={mainImage.loading} /> */}
			</main>

			<Footer />

			{/* <SearchModal /> */}

			{/* <Toast /> */}

			{/* {modalState && (<FlickrSimilarImages />)} */}
		</>
	);
}
