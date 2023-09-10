import React, { useState } from "react";
//import App from "./ether";
import { StrictMode } from "react";

import App from "./App";

//import Dapp from "./ether";
import Transfert from "./transfert";



function UssdSimulator() {
  const [sessionData, setSessionData] = useState({
    sessionId: "",
    serviceCode: "",
    phoneNumber: "",
    text: "",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [response, setResponse] = useState("");

  const handleTextInputChange = (event) => {
    setSessionData({
      ...sessionData,
      text: event.target.value,
    });
    setCurrentStep(0); // Reset step whenever new input is entered
  };

  const handleSendRequest = () => {
    const { text } = sessionData;

    let newResponse = "";

    if (currentStep === 0) {
      if (text === "") {
        //newResponse = "CON What would you want to check \n";
        //newResponse += "1. Identification\n";
        //newResponse += "2. Transfer";
      } else if (text === "1") {
        //newResponse = "CON Please enter your first name and last name";
        setCurrentStep(1);
      } else if (text === "2") {
        newResponse =
          //"CON Please enter your telephone number and transfer amount";
        setCurrentStep(2);
      }
    } else if (currentStep === 1) {
      // Process first and last name
      // For example:
      setFirstName(sessionData.text.split(" ")[0]);
      setLastName(sessionData.text.split(" ")[1]);
      newResponse = "Identification effectuée avec succès!";
      setCurrentStep(0);
    } else if (currentStep === 2) {
      // Process telephone number and transfer amount
      // For example:
      setTelephoneNumber(sessionData.text.split(" ")[0]);
      setTransferAmount(sessionData.text.split(" ")[1]);
      newResponse = "CON Transfer details saved. Press 0 to go back.";
      setCurrentStep(0);
    }

    setResponse(newResponse);
  };

  return (
    <div class="text-white text-center my-3">
      {currentStep === 0 && (
        <div>
          <h1 class="text-whitetext-center">Bienvenue ! choissez un chiffre</h1>
          <p className="text-center text-white">1. Identification</p>
          <p className="text-center text-white">2. Transfert</p> 
    <br/>
          <input
            type="number"
            name="addr"
            className="input input-bordered text-center text-white focus:ring focus:outline-none mx-3"
            placeholder="Enter number"
            value={sessionData.text}
            onChange={handleTextInputChange}
          />
          <button 
            className="btn btn-primary submit-button focus:ring focus:outline-none"
            onClick={handleSendRequest}>Envoyer</button>
        </div>
      )}<br/>

      {currentStep === 1 && (
        <div>
          <label>Nom: </label>
          <input
            type="text"
            name="addr"
            className="input input-bordered text-center text-white focus:ring focus:outline-none mx-3"
            placeholder="exemple: AVIET"
            
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          /> <br/><br/>
          <label>Prenom: </label>
          <input
            type="text"
            name="addr"
            className="input input-bordered text-center text-white focus:ring focus:outline-none mx-3"
            placeholder="exemple: Signo Marceline"
            
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          /><br/><br/>
          <button 
            className="btn btn-primary submit-button focus:ring focus:outline-none"

          onClick={handleSendRequest}>Envoyer</button>
        </div>
      )}
      {currentStep === 2 && (

        <div>
          <>
            <Transfert/>
          </>
         
          
         {/* <label>Telephone Number: </label>
          <input
            type="text"
            value={telephoneNumber}
            onChange={(e) => setTelephoneNumber(e.target.value)}
          />
          <label>Transfer Amount: </label>
          <input
            type="text"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
          />
          <button onClick={handleSendRequest}>Send Request</button>
      */}
        </div>
      )}
      <div>
        <label>    </label>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default UssdSimulator;