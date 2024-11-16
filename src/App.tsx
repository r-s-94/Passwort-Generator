import { useState } from "react";
import "./App.css";
import StarSignComponent from "./starSign";

function App() {
  const [showNewPassword, setShowNewPassword] = useState<string>("Ausgabe");
  const [lengthOfSpecialPassword, setLengthOfSpecialPassword] =
    useState<string>("");
  const [showNewSpecialPassword, setShowNewSpecialPassword] =
    useState<string>("Ausgabe");
  const [specialPasswordNote, setSpecialPasswordNote] =
    useState<boolean>(false);

  const passwordSignArray: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "!",
    "§",
    "$",
    "%",
    "&",
    "/",
    "?",
    "@",
    "#",
    ",",
    ".",
    "+",
    "-",
    ";",
    ":",
    "<",
    ">",
    "|",
    "{",
    "[",
    "(",
    ")",
    "]",
    "}",
  ];

  /*const [generatePasswortArray, setGeneratePasswortArray] = useState<string[]>(
    []
  );*/

  let generateNewPasswortArray: string[] = [];

  function generatePassword() {
    for (let index = 0; index < 8; index++) {
      const getRandomPasswordSign =
        passwordSignArray[Math.floor(Math.random() * passwordSignArray.length)];
      console.log(getRandomPasswordSign);

      generateNewPasswortArray.push(getRandomPasswordSign);

      /*setGeneratePasswortArray((prevRandomArray) => [
        ...prevRandomArray,
        getRandomPasswordSign,
      ]);*/
      //newGeneratePasswortArray.push(getRandomPasswordSign);
      console.log(generateNewPasswortArray);
    }

    if (generateNewPasswortArray.length === 8) {
      setShowNewPassword(generateNewPasswortArray.join(""));
      generateNewPasswortArray = [];
    }
  }

  function generateSpecialPassword() {
    if (Number(lengthOfSpecialPassword) >= 8) {
      for (let index = 0; index < Number(lengthOfSpecialPassword); index++) {
        const getRandomPasswordSign =
          passwordSignArray[
            Math.floor(Math.random() * passwordSignArray.length)
          ];
        console.log(getRandomPasswordSign);

        generateNewPasswortArray.push(getRandomPasswordSign);

        /*setGeneratePasswortArray((prevRandomArray) => [
      ...prevRandomArray,
      getRandomPasswordSign,
    ]);*/
        //newGeneratePasswortArray.push(getRandomPasswordSign);
        console.log(generateNewPasswortArray);
      }

      if (generateNewPasswortArray.length === Number(lengthOfSpecialPassword)) {
        setShowNewSpecialPassword(generateNewPasswortArray.join(""));
        generateNewPasswortArray = [];
        setLengthOfSpecialPassword("");
      }
    } else {
      setSpecialPasswordNote(true);
    }
  }

  return (
    <>
      {specialPasswordNote && (
        <div className="windows-pop-up-main-div">
          <div className="windows-pop-up-message-div">
            Das Passwort sollte mindestens 8 Zeichen (Stellen) haben.
            <button
              onClick={() => setSpecialPasswordNote(false)}
              className="close-button button"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      <h1 className="password-generator-headline">
        Passwortgenerator <br />{" "}
        <span className="special-sign">
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />
          <StarSignComponent />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="lock-sign"
          >
            <path
              fill-rule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>{" "}
      </h1>

      <div className="password-generator-main-div">
        <div className="generally-password-div">
          <button
            onClick={generatePassword}
            className="create-generally-password button"
          >
            Passwort mit 8 Zeichen erstellen
          </button>{" "}
          <span>
            Das neue Passwort heißt:{" "}
            <span className={showNewPassword.length > 7 ? "red" : "black"}>
              {showNewPassword}
            </span>
          </span>{" "}
        </div>

        <div className="special-password-div">
          <p>Wie viele Zeichen (Stellen) soll dein Passwort haben?</p>
          <div className="special-password-input-and-button-div">
            <input
              type="number"
              name=""
              placeholder="z.B.: 10, 15"
              onChange={(event) => {
                setLengthOfSpecialPassword(event.target.value);
              }}
              value={lengthOfSpecialPassword}
            />
            <button
              onClick={generateSpecialPassword}
              className="create-special-password button"
            >
              Passwort erstellen
            </button>{" "}
          </div>
          <span>
            Das neue Passwort heißt:{" "}
            <span
              className={showNewSpecialPassword.length > 7 ? "red" : "black"}
            >
              {showNewSpecialPassword}
            </span>
          </span>{" "}
        </div>
      </div>

      <div className="background-img-div">
        <StarSignComponent />
        <StarSignComponent />
        <StarSignComponent />
        <StarSignComponent />
        <StarSignComponent />
        <StarSignComponent />
        <StarSignComponent />
        <StarSignComponent />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="background-svg"
        >
          <path
            fill-rule="evenodd"
            d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </>
  );
}

export default App;
