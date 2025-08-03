// 激活图像库
// 主要任务是为库中的每个图象附加一个是事件监听器
// 并在单击时做出适当的回应

function activateGallery(){
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img");


    thumbnails.forEach(function(thumbnail){
        // 预加载大图像
        let newImageSrc = thumbnail.dataset.largeVersion;
        let largeVersion = new Image();
        largeVersion.src = newImageSrc;
        // 监听事件
        thumbnail.addEventListener("click", function(){
            // 将单击的图像设置为显示图像
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", thumbnail.alt);

            // 更改当前图像
            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");

            // 更改图像信息
            let galleryInfo = document.querySelector("#gallery-info");
            let title = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");
            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        })
    })
}