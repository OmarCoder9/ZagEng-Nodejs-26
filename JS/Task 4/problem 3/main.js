let currentPic = 0;
const imageSrcs = ["https://i.pinimg.com/236x/7d/83/85/7d8385ae30bdbe7f883c12467f123ab1.jpg", "https://thumbs.dreamstime.com/b/sunset-view-amazing-sky-purwokerto-i-m-just-sharing-my-random-photo-hope-you-re-happy-like-262403964.jpg", "https://cdn.pixabay.com/photo/2015/10/21/18/54/photos-at-random-1000224_1280.jpg"]
const img = document.getElementById("img")
const nextImg = document.getElementById("nextImg")
const prevImg = document.getElementById("prevImg")
const resetBtn = document.getElementById("reset")


img.src = imageSrcs[currentPic];
const updateImageSrc = () => {
    img.src = imageSrcs[currentPic];
}

nextImg.addEventListener("click", () =>{
    if(currentPic === imageSrcs.length - 1){
        currentPic = 0;
    }
    else currentPic++;

    updateImageSrc()
})

prevImg.addEventListener("click", () => {
    if(currentPic === 0){
        currentPic = imageSrcs.length - 1;
    }
    else currentPic--;

    updateImageSrc()
})

resetBtn.addEventListener("click",() => {
    currentPic = 0;
    updateImageSrc()
})