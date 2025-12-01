import React, { useState } from "react";
import { IonPage, IonContent, IonInput, IonButton, IonText } from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./Auth.css";
import { SignUpRequest } from "../store";
import { pulse } from "ionicons/icons";

const Signup: React.FC = () => {
  const history = useHistory();

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handelSignup = async() =>{
    try {
      const response = await SignUpRequest(username, email, password);
      const { token, data } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("authUser", JSON.stringify(data));
      history.push("/login");
    } catch (error) {
      console.log("SignUp Error: ", error);
    } 
  }

  return (
    <IonPage>
      <IonContent className="auth-container">
        <h1 className="auth-title">Create Account</h1>

        <div className="auth-box"> 

        <IonInput 
        className="auth-input" 
        placeholder="Full Name"
        value={username}
        onIonChange={(e)=>setUsername(e.detail.value || "")} 
        />

        <IonInput 
        className="auth-input" 
        type="email" 
        placeholder="Email" 
        value={email}
        onIonChange={(e)=>setEmail(e.detail.value || "")}
        />


        <IonInput 
        className="auth-input" 
        type="password" 
        placeholder="Password"
        value={password}
        onIonChange={(e)=>setPassword(e.detail.value || "")}
        />

        <IonButton 
        expand="block" 
        className="auth-btn"
        onClick={handelSignup}
        >
          Register
        </IonButton>

        <div className="auth-footer">
          <IonText>Already have an account? </IonText>
          <span
            className="auth-link"
            onClick={() => history.push("/login")}
          >
            Login
          </span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
