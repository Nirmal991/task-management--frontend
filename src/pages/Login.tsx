import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { loginRequest } from "../store";
import "./Auth.css";

const Login: React.FC = () => {
  const history = useHistory();

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginRequest(username, password);
      const { token, data } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("authUser", JSON.stringify(data));
      history.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <IonPage>
      <IonContent className="auth-container">
        <h1 className="auth-title">Welcome Back</h1>

        <div className="auth-box">
          <IonInput
            className="auth-input"
            placeholder="Enter Username"
            value={username}
            onIonChange={(e) => setusername(e.detail.value || "")}
          />

          <IonInput
            className="auth-input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value || "")}
          />

          <IonButton
            expand="block"
            className="auth-btn"
            onClick={handleLogin}
          >
             Login
          </IonButton>

          
            {/* <IonText color="danger">
              <p style={{ marginTop: 8 }}></p>
            </IonText> */}

          <p className="auth-footer">
            Don't have an account?
            <span
              className="auth-link"
              onClick={() => history.push("/signup")}
            >
              {" "}
              Sign Up
            </span>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
