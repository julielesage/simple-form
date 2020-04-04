import React, { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  //ouais ce sont des crochets !!!!!
  const [step, setStep] = useState(0);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordbis, setPasswordbis] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      {/* //scope pour pas que le console.log ne soit pas pris pour du texte */}
      {console.log(step)}
      <p style={{ color: "red" }}>{errorMessage}</p>
      {step === 0 ? (
        <form
          onSubmit={event => {
            event.preventDefault();
            if (
              userName === "" ||
              email === "" ||
              password === "" ||
              passwordbis === ""
            ) {
              setErrorMessage("Please fill the entire form before submitting");
            } else if (password !== passwordbis) {
              setErrorMessage("your password has not been confirmed");
            } else setStep(1);
          }}
        >
          <h1>Create Account</h1>
          <main>
            <p>Name</p>
            <input
              type="text"
              value={userName}
              placeholder="type your firstname and lastname here"
              onChange={event => {
                setUsername(event.target.value);
              }}
            ></input>
            <p>Email</p>
            <input
              type="email"
              value={email}
              placeholder="type your email here"
              onChange={event => {
                setEmail(event.target.value);
              }}
            ></input>
            <p>Password</p>
            <input
              type="password"
              value={password}
              placeholder="choose a password here"
              onChange={event => {
                setPassword(event.target.value);
              }}
            ></input>
            <p>Confirm your password</p>
            <input
              type="password"
              value={passwordbis}
              placeholder="confirm by typing again your password"
              onChange={event => {
                setPasswordbis(event.target.value);
              }}
            ></input>
          </main>
          <button type="submit">Register</button>
        </form>
      ) : (
        <div>
          <h2>Results</h2>
          <p>Name : {userName}</p>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
          <button
            onClick={event => {
              setStep(0);
            }}
          >
            Modify your information
          </button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default App;
