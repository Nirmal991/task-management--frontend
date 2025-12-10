import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonText,
  IonAlert,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./Auth.css";
import { CreateOrg, SignUpRequest } from "../store";

const Signup: React.FC = () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handelSignup = async () => {
    setError(null);

    if (!username || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const response = await SignUpRequest(username, email, password);

      const { token, data } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("authUser", JSON.stringify(data));

      setShowAlert(true);
    } catch (error: any) {
      console.log("SignUp Error: ", error);
      console.log("Backend says:", error?.response?.data);
      setError(
        error?.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  
  const handleOrgSubmit = async (orgName: string, domain: string) => {
    if (!orgName.trim() || !domain.trim()) {
      return;
    }

    try {
      const response = await CreateOrg(orgName, domain);
      console.log("Org created:", response.data);

      const orgData = response.data;
      localStorage.setItem("orgInfo", JSON.stringify(orgData));

      history.push("/dashboard");
    } catch (error) {
      console.log("Create Org Error: ", error);
    }
  };

  return (
    <IonPage>
      <IonContent className="auth-container">
        <h1 className="auth-title">Create Account</h1>

        <div className="auth-box">
          <IonInput
            className="auth-input"
            placeholder="Full Name"
            value={username}
            onIonChange={(e) => setUsername(e.detail.value || "")}
          />

          <IonInput
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value || "")}
          />

          <IonInput
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value || "")}
          />

          <IonButton expand="block" className="auth-btn" onClick={handelSignup}>
            Register
          </IonButton>

          {error && (
            <IonText color="danger">
              <p style={{ marginTop: 8 }}>{error}</p>
            </IonText>
          )}

          <div className="auth-footer">
            <IonText>Already have an account? </IonText>
            <span className="auth-link" onClick={() => history.push("/login")}>
              Login
            </span>
          </div>
        </div>

        //alert for org
        <IonAlert
          isOpen={showAlert}
          header="Create Organization"
          message="Enter the name and domain of your organization"
          inputs={[
            {
              name: "org",
              type: "text",
              placeholder: "Organization Name",
            },
            {
              name: "domain",
              type: "text",
              placeholder: "Domain Name",
            },
          ]}
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              handler: () => setShowAlert(false),
            },
            {
              text: "Create",
              handler: (data) => {
                handleOrgSubmit(data.org, data.domain);
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Signup;
