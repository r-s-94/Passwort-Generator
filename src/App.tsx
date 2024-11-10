import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [showNewPassword, setShowNewPassword] = useState<string>("Ausgabe");
  const [lengthOfSpecialPassword, setLengthOfSpecialPassword] =
    useState<string>("");
  const [showNewSpecialPassword, setShowNewSpecialPassword] =
    useState<string>("Ausgabe");
  const [findPassword, setFindPassword] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

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

  let hackPasswordArray: string[] = [];

  useEffect(() => {
    console.log(lengthOfSpecialPassword);
  }, [lengthOfSpecialPassword]);

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
      alert("Das Passwort sollte mindestens 8 Zeichen (Stellen) haben.");
    }
  }

  function hackPassword() {
    const testPassword: string = findPassword;
    let testIndex: number = 0;

    while (testIndex < testPassword.length) {
      for (let index = 0; index < passwordSignArray.length; index++) {
        if (passwordSignArray[index] === testPassword[testIndex]) {
          console.log(passwordSignArray[index]);
          hackPasswordArray.push(passwordSignArray[index]);
          index = 0;
          testIndex = testIndex + 1;
        }
      }
    }

    alert(`Das Passwort heißt: ${hackPasswordArray.join("")}`);
  }

  //let testPassword2: string = "";
  let testPasswordArray: string[] = ["test"];

  function addPassword() {
    testPasswordArray.join(",");
    console.log(testPasswordArray);
    //testPassword2 = inputPassword;
    //console.log(testPassword2);
    //testPasswordArray.push(inputPassword);
    //console.log(testPasswordArray.join());
  }

  return (
    <>
      <h1>Passwortgenerator</h1>
      <div>
        <button onClick={generatePassword}>
          Passwort mit mindestens 8 Zeichen erstellen
        </button>
      </div>
      <hr />
      <div>
        <span>Das neue Passwort lautet: </span> <span>{showNewPassword}</span>
      </div>
      <hr />
      <div>
        <label htmlFor="">
          Wie viele Zeichen (Stellen) soll dein Passwort haben?{" "}
          <input
            type="number"
            name=""
            placeholder="z.B.: 10, 15"
            onChange={(event) => {
              setLengthOfSpecialPassword(event.target.value);
            }}
            value={lengthOfSpecialPassword}
          />
        </label>
        <button onClick={generateSpecialPassword}>Passwort erstellen</button>
      </div>
      <hr />
      <div>
        <span>Das neue Passwort lautet: </span>{" "}
        <span>{showNewSpecialPassword}</span>
      </div>
      <hr />
      <div>
        <p>Knacke das Passwort</p>
        <label htmlFor="">
          Gebe hier ein Passwort ein:{" "}
          <input
            type="text"
            name=""
            value={findPassword}
            onChange={(event) => {
              setFindPassword(event.target.value);
            }}
          />
        </label>
        <button onClick={hackPassword}>Wie heißt das Passwort</button>
      </div>
      <hr />
      <div>
        <p>Füge ein Passwort hinzu.</p>
        <label htmlFor="">
          Passwort:{" "}
          <input
            type="text"
            name=""
            value={inputPassword}
            onChange={(event) => {
              setInputPassword(event.target.value);
            }}
          />
        </label>
        <button onClick={addPassword}>Füge das Passwort hinzu</button>
      </div>
      <hr />
    </>
  );

  /*

  */
}

export default App;
