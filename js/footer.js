window.onload = footer_content();

function footer_content() {
    const footerHtml = `<footer class="footer-content">
    <div class="all-foot">
        <div class="logo-content2">
            <img class="logo-img2" src="../assets/header/safari-pinned-tab.svg" alt="Logo Image">
        </div>
        <div class="foot-items">
            <h4 class="foot-main">Get in touch</h4>        
            <ul class="foot-content">
                <li class="foot-menu">
                    <a href="tel:(480) 624-5200" class="foot-link">(480) 624-5200</a>
                </li>
                <li class="foot-menu">
                    <a href="mailto:mail@discoverylandco.com" class="foot-link email">mail@discoverylandco.com</a>
                </li>
            </ul>
        </div>
        <div class="footer-main">
            <ul class="foot-content --main">
                <li class="foot-menu">
                    <a href="#" class="foot-link">About DLC</a>
                </li>
                <li class="foot-menu">
                    <a href="../pages/ourWorld.html" class="foot-link">Our Worlds</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Experiences</a>
                </li>
                <li class="foot-menu">
                    <a href="../pages/gallery.html" class="foot-link">Gallery</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Press</a>
                </li>                    
            </ul>
            <ul class="foot-content --sub">
                <li class="foot-menu">
                    <a href="#" class="foot-link">Magazine</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Careers</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Foundation</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Company</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Contact</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Privacy</a>
                </li>                    
            </ul>
        </div>
    </div>
    <div class="foot-end">
      <p>© Discovery Land Company. All rights reserved.</p>
    </div>
    </footer>`

    document.querySelector('#footer').innerHTML = footerHtml;
}