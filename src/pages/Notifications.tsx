import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
} from "@ionic/react";
import {
  checkmarkCircleOutline,
  chatboxEllipsesOutline,
  alertCircleOutline,
} from "ionicons/icons";

import "./Notifications.css";

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent className="notif-header">
        <IonToolbar className="notif-toolbar">
          <IonTitle className="notif-title">Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="notif-content">
        {/* blue gradient background */}
        <div className="notif-gradient" />

        <section className="notif-list">
          {/* Item 1 */}
          <div className="notif-card">
            <div className="notif-left">
              <div className="notif-icon-wrapper primary">
                <IonIcon icon={checkmarkCircleOutline} />
              </div>
              <div className="notif-text">
                <div className="notif-row">
                  <h3>Task Completed</h3>
                  <span className="notif-badge">New</span>
                </div>
                <p className="notif-body">
                  Sarah completed &apos;Design mockups&apos; in Mobile App
                  Redesign
                </p>
                <span className="notif-time">2 hours ago</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="notif-card">
            <div className="notif-left">
              <div className="notif-icon-wrapper secondary">
                <IonIcon icon={chatboxEllipsesOutline} />
              </div>
              <div className="notif-text">
                <div className="notif-row">
                  <h3>New Comment</h3>
                  <span className="notif-badge">New</span>
                </div>
                <p className="notif-body">
                  John commented on &apos;User research&apos; task
                </p>
                <span className="notif-time">4 hours ago</span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="notif-card">
            <div className="notif-left">
              <div className="notif-icon-wrapper warning">
                <IonIcon icon={alertCircleOutline} />
              </div>
              <div className="notif-text">
                <div className="notif-row">
                  <h3>Deadline Approaching</h3>
                </div>
                <p className="notif-body">
                  Website Launch project is due in 2 days
                </p>
                <span className="notif-time">1 day ago</span>
              </div>
            </div>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
