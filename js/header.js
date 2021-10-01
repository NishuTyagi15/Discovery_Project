window.onload = header_content();

function header_content() {
    const headerHtml = `<div class="item-container">
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
    </div>`
    
    document.querySelector('#header').innerHTML = headerHtml;
}