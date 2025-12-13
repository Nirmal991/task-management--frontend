import React from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { loginRequest } from "../store";
import "./Auth.css";

interface LoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (formData: LoginForm) => {
    try {
      const response = await loginRequest(
        formData.username,
        formData.password
      );

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

        <form className="auth-box" onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <Controller
            name="username"
            control={control}
            rules={{ required: "Username is required" }}
            render={({ field }) => (
              <IonInput
                {...field}
                className="auth-input"
                placeholder="Enter Username"
              />
            )}
          />
          {errors.username && (
            <IonText color="danger">
              <p className="auth-error">{errors.username.message}</p>
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
                placeholder="Enter Password"
              />
            )}
          />
          {errors.password && (
            <IonText color="danger">
              <p className="auth-error">{errors.password.message}</p>
            </IonText>
          )}

          {/* Login Button */}
          <IonButton
            expand="block"
            className="auth-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </IonButton>

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
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
