const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const selectedImage = document.getElementById("selectedImage");

//just add new images to gallery folder and bulk rename in image[$] and update for loop length to number of photos
for (let i = 1; i <= 6; i++) {
	const image = document.createElement("img");
	image.src = `./gallery/image${i}.jpg`;
	image.alt = `this is a black and white photo of image${i}`;
	image.classList.add("galleryImg");

	image.addEventListener("click", () => {
		popup.style.transform = "translateY(0)";
		selectedImage.src = `./gallery/image${i}.jpg`;
		selectedImage.alt = `this is a black and white photo of image${i}`;
	});

	gallery.appendChild(image);
}

popup.addEventListener("click", () => {
	popup.style.transform = "translateY(-100%)";
	popup.src = "";
	popup.alt = "";
});
