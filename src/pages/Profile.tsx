import React, { useMemo } from "react";
import {
  IonPage,
  IonContent,
  IonIcon
} from "@ionic/react";
import { useHistory } from "react-router-dom";

import {
  settingsOutline,
  helpCircleOutline,
  shieldCheckmarkOutline,
  logOutOutline
} from "ionicons/icons";

import "./Profile.css";
import { createProject } from "../store";

const Profile: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    localStorage.removeItem("orgInfo");

    history.push("/home"); 
  };

  const user = useMemo(() => {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null
  }, [])

  const name = user?.username || "user";
  const email = user?.email || "example@gmail.com";

  const avatarLetter = name.charAt(0).toUpperCase(); 

  return (
    <IonPage>
      <IonContent fullscreen className="profile-content">
        <div className="profile-gradient"></div>

        <section className="profile-top">
          <div className="profile-avatar">{avatarLetter}</div>
          <h2 className="profile-name">{name}</h2>
          <p className="profile-email">{email}</p>
        </section>

        <section className="profile-stats-card">
          <div className="profile-stat">
            <h3>8</h3>
            <span>Projects</span>
          </div>
          <div className="profile-stat">
            <h3>42</h3>
            <span>Tasks</span>
          </div>
          <div className="profile-stat">
            <h3>12</h3>
            <span>Teams</span>
          </div>
        </section>

        <section className="profile-list">
          <div className="profile-list-item">
            <IonIcon icon={settingsOutline} className="profile-icon" />
            <span>Settings</span>
          </div>

          <div className="profile-list-item">
            <IonIcon icon={helpCircleOutline} className="profile-icon" />
            <span>Help & Support</span>
          </div>

          <div className="profile-list-item">
            <IonIcon icon={shieldCheckmarkOutline} className="profile-icon" />
            <span>Privacy Policy</span>
          </div>
        </section>

        <button className="profile-logout-btn" onClick={handleLogout}>
          <IonIcon icon={logOutOutline} className="logout-icon" />
          Logout
        </button>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
