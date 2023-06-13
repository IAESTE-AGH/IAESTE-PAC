import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import { Link } from "react-router-dom";
import classes from "./QRPage.module.css";
import logo from "../../assets/inne/tinder-logo-white.webp";

const QRpage = () => {
  const link = "https://iaeste-agh.github.io/IAESTE-PAC/";
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      link || " ",
      (error) => error && console.error(error)
    );
  }, []);

  return (
    <Link to="/instruction" style={{ textDecoration: "none" }}>
      <main className={classes.qrPage}>
        <div className={classes.emptyWrapper}></div>
        <header>
          <img src={logo} />
          <h1>IAESTE PAC</h1>
        </header>
        <div className={classes.qrWrapper}>
          <p>
            Dzięki zeskanowaniu kodu QR będziesz mógł skorzystać <br></br> z
            naszej aplikacji w swoim telefonie!
          </p>
          <canvas ref={canvasRef} />
        </div>
      </main>
    </Link>
  );
};

export default QRpage;
