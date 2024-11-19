import { useState } from "react";
import Swal from "sweetalert2";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(Number());
  const [gender, setGender] = useState("male");
  const [file, setFile] = useState("");
  const [url, setURL] = useState();
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      contact === "" ||
      gender === "" ||
      file === "" ||
      url === "" ||
      message === ""
    ) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Kindly fill the form!",
      });
    } else {
      Swal.fire({
        title: "Form Submitted!",
        text: "You will receive a message from us shortly!",
        icon: "success",
      });
    }

    setContact("");
    setEmail("");
    setFile("");
    setFirstName("");
    setGender("");
    setLastName("");
    setMessage("");
    setURL("");
  }

  function handleReset() {
    setLastName("");
    setContact("");
    setEmail("");
    setFirstName("");
    setGender("");
    setFile("");
    setMessage("");
    setURL("");
  }
  return (
    <div className="main">
      <div className="app">
        <h1>Form</h1>
        <form>
          <label htmlFor="name">First Name*</label>
          <input
            type="name"
            id="name"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="last_name">Last Name*</label>
          <input
            type="name"
            id="last_name"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="email">Enter Email*</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="number"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label htmlFor="gender">Gender*</label>
          <span>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="femmale">Female</label>
            <input
              type="radio"
              id="female"
              value="female"
              checked={gender === "female" ? gender : null}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="other">Other</label>
            <input
              type="radio"
              id="other"
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
          </span>
          <label htmlFor="file">Upload Resume</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="url">Enter URL</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={(e) => setURL(e.target.value)}
          />
          <label htmlFor="message">About</label>
          <textarea
            id="message"
            name="message"
            placeholder="About yourself"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>{" "}
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
