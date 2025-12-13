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
import { useForm, Controller } from "react-hook-form";
import "./Auth.css";
import { CreateOrg, SignUpRequest } from "../store";

interface SignupForm {
  username: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const history = useHistory();

  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: SignupForm) => {
    setError(null);

    try {
      const response = await SignUpRequest(
        formData.username,
        formData.email,
        formData.password
      );

      const { token, data } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("authUser", JSON.stringify(data));

      setShowAlert(true);
    } catch (err: any) {
      console.log("SignUp Error: ", err);
      setError(
        err?.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  const handleOrgSubmit = async (orgName: string, domain: string) => {
    if (!orgName.trim() || !domain.trim()) return;

    try {
      const response = await CreateOrg(orgName, domain);
      localStorage.setItem("orgInfo", JSON.stringify(response.data));
      history.push("/dashboard");
    } catch (error) {
      console.log("Create Org Error: ", error);
    }
  };

  return (
    <IonPage>
      <IonContent className="auth-container">
        <h1 className="auth-title">Create Account</h1>

        <form className="auth-box" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <Controller
            name="username"
            control={control}
            rules={{ required: "Full name is required" }}
            render={({ field }) => (
              <IonInput
                {...field}
                className="auth-input"
                placeholder="Full Name"
              />
            )}
          />
          {errors.username && (
            <IonText color="danger">
              <p className="auth-error">{errors.username.message}</p>
            </IonText>
          )}

          {/* Email */}
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            }}
            render={({ field }) => (
              <IonInput
                {...field}
                type="email"
                className="auth-input"
                placeholder="Email"
              />
            )}
          />
          {errors.email && (
            <IonText color="danger">
              <p className="auth-error">{errors.email.message}</p>
            </IonText>
          )}

          {/* Password */}
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field }) => (
              <IonInput
                {...field}
                type="password"
                className="auth-input"
                placeholder="Password"
              />
            )}
          />
          {errors.password && (
            <IonText color="danger">
              <p className="auth-error">{errors.password.message}</p>
            </IonText>
          )}

          {/* Submit */}
          <IonButton
            expand="block"
            className="auth-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating account..." : "Register"}
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
        </form>

        {/* Organization Alert */}
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
