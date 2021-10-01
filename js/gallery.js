window.onload = header_content();
window.onload = gallery_content();

function header_content() {
    const headerHtml = ` <img src="../assets/gallery/img1.jpg" class="gimage" alt="" style="width:100%;">
    <div class="item-container">
        <div class="logo-content1">
            <img class="logo-img1" src="../assets/header/namelogo.svg" alt="Logo Image">
        </div>
        <div class="nav-content">
            <div class="nav"><a href="#">About DLC</a></div>
            <div class="nav"><a href="../pages/ourWorld.html">Our Worlds</a></div>
            <div class=""><a href="#">Experiences</a></div>
            <div><a href="../pages/gallery.html">Gallery</a></div>
            <div><a href="#">Press</a></div>
        </div>
        <div class="container">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </div>
    <div class="gitems">
        <p>Gallery</p>
    </div>`
    
    document.querySelector('#header').innerHTML = headerHtml;
}

function gallery_content() {
    gallery= [
        {
            id: 1,
            image: "/assets/gallery/img2.jpg",
            htag: "Outdoor Pursuits",
        },
        {
            id: 2,
            image: "/assets/gallery/img3.jpg",
            htag: "Golf",
        },
        {
            id: 3,
            image: "/assets/gallery/img4.jpeg",
            htag: "Lifestyle",
        },
        {
            id: 4,
            image: "/assets/gallery/img5.jpg",
            htag: "Landscapes",
        },
        {
            id: 5,
            image: "/assets/gallery/img6.jpg",
            htag: "Clubhouses",
        },
        {
            id: 6,
            image: "/assets/gallery/img7.jpg",
            htag: "Wellness",
        }
    ];
}


var content= '';

gallery.forEach(element=> {
    content += `<div class="gmain-items">
    <img class="image"
        src="${element.image}" alt="">
    <h1 class="gtitle">${element.htag}</h1>
</div> `
});
document.querySelector('#main').innerHTML=content;