import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonText,
  IonProgressBar,
} from "@ionic/react";
import {
  gridOutline,
  checkmarkCircleOutline,
  timeOutline,
  alertCircleOutline,
  notificationsOutline,
  searchOutline,
} from "ionicons/icons";

import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true} className="dash-header">
        <IonToolbar className="dash-toolbar">
          <div className="dash-header-row">
            {/* LEFT: greeting */}
            <div className="dash-header-left">
              <h1 className="dash-title">Good Morning 👋</h1>
              <p className="dash-subtitle">
                Here&apos;s what&apos;s happening with your projects
              </p>
            </div>

            {/* RIGHT: notification + search */}
            <div className="dash-header-right">
              <button className="dash-icon-button">
                <IonIcon icon={notificationsOutline} />
              </button>

              <div className="dash-search">
                <IonIcon icon={searchOutline} className="dash-search-icon" />
                <input
                  className="dash-search-input"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="dash-content">
        {/* gradient background behind top section */}
        <div className="dash-gradient" />

        {/* Stats cards */}
        <section className="dash-stats">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <div className="stat-card">
                  <div className="stat-icon">
                    <IonIcon icon={gridOutline} />
                  </div>
                  <div className="stat-value">8</div>
                  <IonText className="stat-label">Total Projects</IonText>
                </div>
              </IonCol>

              <IonCol size="6">
                <div className="stat-card">
                  <div className="stat-icon success">
                    <IonIcon icon={checkmarkCircleOutline} />
                  </div>
                  <div className="stat-value">24</div>
                  <IonText className="stat-label">Completed</IonText>
                </div>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="6">
                <div className="stat-card">
                  <div className="stat-icon warning">
                    <IonIcon icon={timeOutline} />
                  </div>
                  <div className="stat-value">12</div>
                  <IonText className="stat-label">In Progress</IonText>
                </div>
              </IonCol>

              <IonCol size="6">
                <div className="stat-card">
                  <div className="stat-icon danger">
                    <IonIcon icon={alertCircleOutline} />
                  </div>
                  <div className="stat-value">3</div>
                  <IonText className="stat-label">Overdue</IonText>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Recent projects */}
        <section className="dash-projects">
          <div className="dash-projects-header">
            <h2>Recent Projects</h2>
            <button className="link-button">View All</button>
          </div>

          {/* Project card 1 */}
          <div className="project-card">
            <div className="project-header">
              <h3>Mobile App Redesign</h3>
              <span className="project-tasks">8 tasks</span>
            </div>
            <div className="project-progress-label">Progress</div>
            <IonProgressBar
              className="project-progress-bar primary"
              value={0.75}
              type="determinate"
            />
            <div className="project-percentage">75%</div>
          </div>

          {/* Project card 2 */}
          <div className="project-card">
            <div className="project-header">
              <h3>Website Launch</h3>
              <span className="project-tasks">12 tasks</span>
            </div>
            <div className="project-progress-label">Progress</div>
            <IonProgressBar
              className="project-progress-bar secondary"
              value={0.45}
              type="determinate"
            />
            <div className="project-percentage">45%</div>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
