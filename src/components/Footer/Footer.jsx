import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white py-28">
      <div className="footer-left">
        <p>
          <span className="text-2xl">&copy;</span>&nbsp;
          <span className="font-extrabold text-2xl">2025</span>
          &nbsp;&lt;&#x2215;&gt;&nbsp;
          <span className="font-extrabold text-2xl">YASH Team </span>
        </p>
        <p className="text-xl mt-4">
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          &nbsp; <span>View source code of this project</span>
        </p>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/laukik-lanje/"
            target="_blank"
            className="cursor-pointer"
          >
            <i className="fa-brands fa-linkedin foot-icon"></i>
          </a>
          <a
            href="https://www.instagram.com/laukik2404/"
            target="_blank"
            className="cursor-pointer"
          >
            <i className="fa-brands fa-instagram foot-icon"></i>
          </a>
          <a
            href="mailto:laukiklanje24@gmail.com"
            target="_blank"
            className="cursor-pointer"
          >
            <i className="fa-regular fa-envelope foot-icon"></i>
          </a>
        </div>
        <p className="text-lg flex text-white mt-4">
          Made by &nbsp;{" "}
          <a
            href="https://portfolio-laukik.vercel.app/"
            target="blank"
            className=" text-xl font-extrabold hover:underline"
          >
            Laukik
          </a>
          &nbsp;
          <a
            href=""
            target="blank"
            className=" text-xl font-extrabold hover:underline"
          >
            Kunal .A.
          </a>
          &nbsp;
          <a
            href=""
            target="blank"
            className=" text-xl font-extrabold hover:underline"
          >
            Chitraksh
          </a>
          &nbsp;{" "}
          <a
            href=""
            target="blank"
            className=" text-xl font-extrabold hover:underline"
          >
            & Rayyan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
