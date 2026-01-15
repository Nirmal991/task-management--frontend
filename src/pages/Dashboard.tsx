import React, { useState } from "react";
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
  IonAlert,
} from "@ionic/react";
import {
  chevronBackOutline,
  gridOutline,
  checkmarkCircleOutline,
  timeOutline,
  alertCircleOutline,
  notificationsOutline,
  searchOutline,
} from "ionicons/icons";

import "./Dashboard.css";
import { useHistory } from "react-router";
import { CreateOrg } from "../store";

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [showCreateOrg, setShowCreateOrg] = useState(false);

  const handleBack = () => {
    history.push("/home");
  };

  const handleCreateOrg = async (orgName: string, domain: string) => {
    if (!orgName || !domain) return;

    try {
      const response = await CreateOrg(orgName, domain);
      localStorage.setItem("orgInfo", JSON.stringify(response.data));
    } catch (error) {
      console.log("Create Org Error:", error);
    }
  };

  return (
    <IonPage>
      <IonHeader translucent className="dash-header">
        <IonToolbar className="dash-toolbar">
          <div className="dash-header-row">
            
            <div className="dash-header-left">
              <h1 className="dash-title">Good Morning 👋</h1>
              <p className="dash-subtitle">
                Here's what's happening with your projects
              </p>

              <div className="dash-left-actions">
                <IonIcon
                  icon={chevronBackOutline}
                  className="task-back-icon"
                  onClick={handleBack}
                />

                <button
                  className="dash-create-org-btn"
                  onClick={() => setShowCreateOrg(true)}
                >
                  Create Org
                </button>
              </div>
            </div>

            <div className="dash-header-right">
              <button
                className="dash-icon-button"
                onClick={() => history.push("/notifications")}
              >
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
        <div className="dash-gradient" />

        {/* STATS */}
        <section className="dash-stats">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <div className="stat-card">
                  <div className="stat-icon">
                    <IonIcon icon={gridOutline} />
                  </div>
                  <div className="stat-value">2</div>
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

        {/* RECENT PROJECTS */}
        <section className="dash-projects">
          <div className="dash-projects-header">
            <h2>Recent Projects</h2>
            <button className="link-button">View All</button>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Mobile App Redesign</h3>
              <span className="project-tasks">8 tasks</span>
            </div>
            <div className="project-progress-label">Progress</div>
            <IonProgressBar
              value={0.75}
              className="project-progress-bar primary"
            />
            <div className="project-percentage">75%</div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Website Launch</h3>
              <span className="project-tasks">12 tasks</span>
            </div>
            <div className="project-progress-label">Progress</div>
            <IonProgressBar
              value={0.45}
              className="project-progress-bar secondary"
            />
            <div className="project-percentage">45%</div>
          </div>
        </section>

        <IonAlert
          isOpen={showCreateOrg}
          header="Create Organization"
          message="Enter your organization details"
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
              handler: () => setShowCreateOrg(false),
            },
            {
              text: "Create",
              handler: (data) => {
                handleCreateOrg(data.org, data.domain);
                setShowCreateOrg(false);
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
