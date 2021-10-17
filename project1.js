function motivationalSpeechWallpaper(wallpaper){
    //div(土台)作成
    let wallpaperDiv = document.createElement("div");
    wallpaperDiv.classList.add("d-flex", "justify-content-center");

    //div(背景画像)作成
    let imgDiv = document.createElement("div");
    imgDiv.style.backgroundImage = "url(" + wallpaper.imgUrl + ")";
    imgDiv.style.backgroundSize = "cover";
    imgDiv.style.backgroundRepeat = "no-repeat";
    imgDiv.style.backgroundPosition = "center";
    imgDiv.classList.add("bg-imgSize", "p-4", "m-3", "d-flex", wallpaper.getAlign(), wallpaper.getJustify());
    wallpaperDiv.append(imgDiv);

    //h5タグ作成
    let h5 = document.createElement("h5");
    h5.innerHTML = wallpaper.message;
    h5.style.color = "#" + wallpaper.colorCode;
    h5.classList.add("col-6");
    imgDiv.append(h5);

    return wallpaperDiv
}

class Wallpaper{
    constructor(message, colorCode, imgUrl, align, justify){
        this.message = message;
        this.colorCode = colorCode;
        this.imgUrl = imgUrl;
        this.align = align;
        this.justify = justify;
    }

    getAlign(){
        if(this.align == "center") return "align-items-center"
        else if(this.align == "top") return "align-items-start"
        else if(this.align == "bottom") return "align-items-end"
    }

    getJustify(){
        if(this.justify == "center") return "justify-content-center"
        else if(this.justify == "left") return "justify-content-start"
        else if(this.justify == "right") return "justify-content-end"
    }
}

    let domObj = document.getElementById("target");
    
    let msw1 = new Wallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center");
    let msw2 = new Wallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left")
    let msw3 = new Wallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right")
    
    domObj.append(motivationalSpeechWallpaper(msw1));
    domObj.append(motivationalSpeechWallpaper(msw2));
    domObj.append(motivationalSpeechWallpaper(msw3));