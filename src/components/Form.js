import { useState } from "react";
// import Result from "./Result-validform";
const Form = (props) => {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [validpassword, setValidpassword] = useState("");
  const [display, setDisplay] = useState(false);

  const handleMailChange = (event) => {
    const value = event.target.value;
    setMail(value);
  };
  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleValidPasswordChange = (event) => {
    const value = event.target.value;
    setValidpassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    console.log("Username", username);
    console.log("Email", mail);
    console.log("Password", password);
    console.log("Valid Password", validpassword);
    const formSended = true;
    if (formSended === true) {
      alert(
        `Formulaire envoyé ! \n Name : ${username}\n Email : ${mail}\n Password :${password} \n Validate Password : ${validpassword}`
      );
      setUsername("");
      setMail("");
      setPassword("");
      setValidpassword("");
    }
  };
  return (
    <div className="Allform">
      <div>
        {display === false ? (
          <form
            onSubmit={handleSubmit}
            className="form"
            setDisplay={setDisplay}
          >
            <h1>Create account</h1>

            <span>Name</span>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <span>Email</span>
            <input
              placeholder="Email"
              type="text"
              name="mail"
              value={mail}
              onChange={handleMailChange}
            />
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span>Confirm your password</span>
            <input
              type="password"
              placeholder="confirm your password"
              name="validpassword"
              value={validpassword}
              onChange={handleValidPasswordChange}
            />
            {password === validpassword ? (
              <input
                className="Register"
                type="submit"
                value="Register"
                onClick={() => {
                  setDisplay(true);
                }}
              />
            ) : (
              <input disabled type="submit" value="Submit" />
            )}
          </form>
        ) : (
          <div>
            <h1 className="resulTformH">Results</h1>
            <div className="resulTform">
              <p>Name : {username}</p>
              <p>Email : {mail}</p>
              <p>Password : {password}</p>
            </div>

            <button
              className="resulTformButton"
              onClick={() => {
                setDisplay(false);
              }}
            >
              Edit your information
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
