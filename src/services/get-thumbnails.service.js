
export const getThumbnails = async (setImageThumbnails) => {

    const response = await fetch("https://run.mocky.io/v3/525464b2-740b-40f8-9fb4-1cf0a6be1a6d");

    if (response.status !== 200) {
        return;
    }

    const data = await response.json();

    const thumbnails = [];

    data
        .slice(0, 3)
        .forEach((each, index) => {
            thumbnails.push({ id: each.id, loading: true });
            setImageThumbnails([...thumbnails]);

            const img = new Image();
            img.onload = () => {
                thumbnails[index] = { ...each, loading: false, selected: false };
                setImageThumbnails([...thumbnails]);
            }
            img.src = each.fileurl;
        });
}
