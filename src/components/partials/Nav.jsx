
function Nav() {
    return (
      <>
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
            <div className="row gx-0">
                <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div
                        className="d-inline-flex align-items-center" style={{innerHeight:45}}
                    >
                        <small className="me-3 text-light"
                            ><i className="fa fa-map-marker-alt me-2"></i>123
                            Street, New York, USA</small
                        >
                        <small className="me-3 text-light"
                            ><i className="fa fa-phone-alt me-2"></i>+012 345
                            6789</small
                        >
                        <small className="text-light"
                            ><i className="fa fa-envelope-open me-2"></i
                            >info@example.com</small
                        >
                    </div>
                </div>
                <div className="col-lg-4 text-center text-lg-end">
                    <div
                        className="d-inline-flex align-items-center"
                        style={{innerHeight:45}}
                    >
                        <a
                            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                            href=""
                            ><i className="fab fa-twitter fw-normal"></i
                        ></a>
                        <a
                            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                            href=""
                            ><i className="fab fa-facebook-f fw-normal"></i
                        ></a>
                        <a
                            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                            href=""
                            ><i className="fab fa-linkedin-in fw-normal"></i
                        ></a>
                        <a
                            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                            href=""
                            ><i className="fab fa-instagram fw-normal"></i
                        ></a>
                        <a
                            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                            href=""
                            ><i className="fab fa-youtube fw-normal"></i
                        ></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                <a href="index.html" className="navbar-brand p-0">
                    <h1 className="m-0">
                        <i className="fa fa-user-tie me-2"></i>Startup
                    </h1>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.html" className="nav-item nav-link active"
                            >Home</a
                        >
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link"
                            >Services</a
                        >
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                >Blog</a
                            >
                            <div className="dropdown-menu m-0">
                                <a href="blog.html" className="dropdown-item"
                                    >Blog Grid</a
                                >
                                <a href="detail.html" className="dropdown-item"
                                    >Blog Detail</a
                                >
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                >Pages</a
                            >
                            <div className="dropdown-menu m-0">
                                <a href="price.html" className="dropdown-item"
                                    >Pricing Plan</a
                                >
                                <a href="feature.html" className="dropdown-item"
                                    >Our features</a
                                >
                                <a href="team.html" className="dropdown-item"
                                    >Team Members</a
                                >
                                <a href="testimonial.html" className="dropdown-item"
                                    >Testimonial</a
                                >
                                <a href="quote.html" className="dropdown-item"
                                    >Free Quote</a
                                >
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link"
                            >Contact</a
                        >
                    </div>
                    <button
                        type="button"
                        className="btn text-primary ms-3"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal"
                        ><i className="fa fa-search"></i
                    ></button>
                    <a
                        href="https://htmlcodex.com/startup-company-website-template"
                        className="btn btn-primary py-2 px-4 ms-3"
                        >Download Pro Version</a
                    >
                </div>
            </nav>
        </div>
      </>
    )
  }
  
  export default Nav
  