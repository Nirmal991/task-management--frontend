import React from "react";
import {
  IonPage,
  IonContent,
  IonIcon
} from "@ionic/react";

import {
  settingsOutline,
  helpCircleOutline,
  shieldCheckmarkOutline,
  logOutOutline
} from "ionicons/icons";

import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen className="profile-content">
        <div className="profile-gradient"></div>

        {/* ============== USER PROFILE BOX ============== */}
        <section className="profile-top">
          <div className="profile-avatar">JD</div>
          <h2 className="profile-name">John Doe</h2>
          <p className="profile-email">john.doe@example.com</p>
        </section>

        {/* ============== USER STATS ============== */}
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

        {/* ============== LIST SETTINGS ============== */}
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

        {/* ============== LOGOUT BUTTON ============== */}
        <button className="profile-logout-btn">
          <IonIcon icon={logOutOutline} className="logout-icon" />
          Logout
        </button>

      </IonContent>

    </IonPage>
  );
};

export default Profile;
