
    var navbar = ` 
    <nav class="navbar">
        <div>
            <a href="/">
                <div id="logo">
                    <img src="/assets/images/nardu.info-invert.svg" alt="logo" loading="lazy"/>
                </div>
            </a>
        </div>
        <div class="nav">
            <a href="/index.html" class="here">Welcome</a>
            <a href="/about.html">About</a>
            <a href="/services.html">Services</a>
            <a href="assets/html/contact.html">Contact</a>
        </div>
    </nav>`;

    // inserting navbar in beginning of body
    document.body.insertAdjacentHTML("afterbegin", navbar);
    document.body.style.backgroundColor = "blue";