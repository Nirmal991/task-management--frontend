import React, { useState } from "react";
import { IonPage, IonContent, IonInput, IonButton, IonText } from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./Auth.css";

const Signup: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="auth-container">
        <h1 className="auth-title">Create Account</h1>

        <div className="auth-box"> 

        <IonInput className="auth-input" placeholder="Full Name" />
        <IonInput className="auth-input" type="email" placeholder="Email" />
        <IonInput className="auth-input" type="password" placeholder="Password" />

        <IonButton expand="block" className="auth-btn">
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
