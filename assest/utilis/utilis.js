
let nav = `
    <nav id="header-nav" class="navbar navbar-expand-lg">
            <div class="container-lg">
                <a class="navbar-brand" href="./index.html">
                    <img src="./assest/images/main-logo.png" class="logo" alt="logo">
                </a>
                 <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="mobileMenu">
                    <div class="offcanvas-header px-4 pb-0">
                        <a class="navbar-brand ps-3" href="./index.html">
                            <img src="./assest/images/main-logo.png" class="logo" alt="logo">
                        </a>
                        <button type="button" class="btn-close btn-close-black p-5" data-bs-dismiss="offcanvas"
                            aria-label="Close" data-bs-target="#bdNavbar"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul id="navbar" class="navbar-nav fw-bold justify-content-end align-items-center flex-grow-1">
                            <li class="nav-item dropdown">
                                <a class="nav-link me-5 active dropdown-toggle border-0" href="#"
                                    data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                                <ul class="dropdown-menu fw-bold">
                                    <li>
                                        <a href="javascript:void(0)" class="dropdown-item">Home V1</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="dropdown-item">Home V2 </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-5" href="javascript:void(0)">Men</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-5" href="javascript:void(0)">Women</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link me-5 dropdown-toggle border-0" href="javascript:void(0)"
                                    data-bs-toggle="dropdown" aria-expanded="false">Page</a>
                                <ul class="dropdown-menu fw-bold">
                                    <li>
                                        <a href="javascript:void(0)" class="dropdown-item">About Us </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0)">Shop </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0)">Blog </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0)">Single Product </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0)">Single Post </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0)">Styles </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#modallong"
                                            class="dropdown-item">cart</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#modallogin"
                                            class="dropdown-item">Login</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-5" href="javascript:void(0)">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-5" href="javascript:void(0)">Sale</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="user-items ps-0 ps-md-5">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 shadow-none" type="search" id="search" placeholder="Search"
                            aria-label="Search" />
                        <button class="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
`;

const header = document.querySelector('header').innerHTML = nav;

export default header;

let footer_menu = `
    <div class="container-lg">
            <div class="row">
                <div class="col-lg-2 pb-3">
                    <div class="footer-menu">
                        <h5 class="widget-title pb-2">Info</h5>
                        <ul class="menu-list list-unstyled">
                            <li class="pb-2">
                                <a href="#">Track Your Order</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Our Blog</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Privacy policy</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Shipping</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Contact Us</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Help</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Community</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 pb-3">
                    <div class="footer-menu">
                        <h5 class="widget-title pb-2">About</h5>
                        <ul class="menu-list list-unstyled">
                            <li class="pb-2">
                                <a href="#">History</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Our Team</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Services</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Company</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Manufacture</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Wholesale</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Retail</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 pb-3">
                    <div class="footer-menu">
                        <h5 class="widget-title pb-2">Women Shoes</h5>
                        <ul class="menu-list list-unstyled">
                            <li class="pb-2">
                                <a href="#">Track Your Order</a>
                            </li>
                            <li class="pb-2">
                                <a href="index.html">Our Blog</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Privacy policy</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Shipping</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Contact Us</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Help</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Community</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 pb-3">
                    <div class="footer-menu">
                        <h5 class="widget-title pb-2">Popular</h5>
                        <ul class="menu-list list-unstyled">
                            <li class="pb-2">
                                <a href="#">Prices Drop</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">New Products</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Best Sales</a>
                            </li>
                            <li class="pb-2">
                                <a href="index.html">Stores</a>
                            </li>
                            <li class="pb-2">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#modallogin">Login</a>
                            </li>
                            <li class="pb-2">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#modallong">Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 pb-3">
                    <div class="footer-menu">
                        <h5 class="widget-title pb-2">Mens Collection</h5>
                        <ul class="menu-list list-unstyled">
                            <li class="pb-2">
                                <a href="#">Delivery</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">About Us</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Shoes</a>
                            </li>
                            <li class="pb-2">
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 pb-3">
                    <div class="footer-menu">
                        <h5 class="widget-title pb-3">Get In Touch</h5>
                        <div class="footer-contact-text">
                            <span>Stylish Online Store 123 Main Street, Toulouse - France. </span>
                            <span> Call us: (+33) 800 456 789-987 </span>
                            <span class="text-hover fw-bold light-border"><a
                                    href="#">contact@yourwebsite.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p>© Copyright Stylish 2025.</p>
                </div>
                <div class="col-md-6 text-lg-end">
                    <p>Developed by <a href="#" target="_blank">Pooja Patel</a></p>
                </div>
            </div>
        </div>
`;

export const footer = document.querySelector('footer').innerHTML = footer_menu;



