const Footer = () => (
  <footer className="page-footer font-small blue pt-4 bg-dark text-light mt-5">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">E-Zon</h5>
          <p>An e-commerce website where one finds what he seeks. </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3"></div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Connect</h5>
          <ul className="list-group">
            <li className="list-group-item bg-dark ">
              <a href="#!" className="link-light">
                LinkedIn
              </a>
            </li>
            <li className="list-group-item bg-dark ">
              <a href="#!" className="link-light">
                Github
              </a>
            </li>
            <li className="list-group-item bg-dark ">
              <a href="#!" className="link-light">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright</div>
  </footer>
);

export default Footer;
