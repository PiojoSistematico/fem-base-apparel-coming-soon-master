import { useRef, useState } from "react";
import logo from "./assets/logo.svg";
import heroMobile from "./assets/hero-mobile.jpg";
import heroDesktop from "./assets/hero-desktop.jpg";
import arrow from "./assets/icon-arrow.svg";
import error from "./assets/icon-error.svg";

function isValidEmail(email) {
  return /^.+@[^\.].*\.[a-z]{2,}$/.test(email);
}

function App() {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();

  return (
    <main>
      <header>
        <img src={logo} alt="" />
      </header>
      <section className="image-section">
        <img className="heroMobile" src={heroMobile} alt="" />
        <img className="heroDesktop" src={heroDesktop} alt="" />
      </section>
      <section className="content-section">
        <h1>
          <span>We're</span>{" "}
          <div className="accent">
            <span>coming</span> <span>soon</span>{" "}
          </div>
        </h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form action="">
          <input
            type="text"
            ref={inputRef}
            placeholder="Email Address"
            required
          />
          <div className="error-section">
            <img
              className={isValid ? "hidden" : "error-icon"}
              src={error}
              alt=""
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(inputRef.current.value);
              console.log(isValidEmail(inputRef.current.value));
              setIsValid(isValidEmail(inputRef.current.value));
            }}
          >
            {" "}
            <img src={arrow} alt="" />
          </button>
        </form>
        <span className={isValid ? "hidden" : "warning"}>
          Please provide a valid email
        </span>
      </section>
    </main>
  );
}

export default App;
