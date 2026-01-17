import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonProgressBar,
  IonAlert,
  IonText,
} from "@ionic/react";
import {
  notificationsOutline,
  searchOutline,
  gridOutline,
  checkmarkCircleOutline,
  timeOutline,
  alertCircleOutline,
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
      <IonHeader className="dash-header">
        <IonToolbar className="dash-toolbar">
          {/* TITLE */}
          <div className="dash-title-row">
            <div>
              <h1>Good Morning 👋</h1>
              <p>Here's what's happening with your projects</p>
            </div>

            <div className="dash-search-wrap">
              <IonIcon onClick={() => history.push("/notifications")} icon={notificationsOutline} />
              <div className="dash-search">
                <IonIcon icon={searchOutline} />
                <input placeholder="Search" />
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="dash-action-row">
            <button className="dash-pill-btn"
            onClick={() => setShowCreateOrg(true)}
            >Create Org</button>
            <button className="dash-pill-btn">Org Info</button>
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
                  <IonText   className="stat-label">Overdue</IonText>
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
