import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonProgressBar,
} from "@ionic/react";

import {
  chevronBackOutline,
  calendarOutline,
  peopleOutline,
  ellipsisVertical,
  checkmarkCircleOutline,
} from "ionicons/icons";

import "./TaskDetails.css";

const TaskDetails: React.FC = () => {

  const handleBack = () => {
    window.history.back(); // you can replace with history.push()
  };

  return (
    <IonPage>

      {/* ================= TOP NAV BAR ================= */}
      <IonHeader translucent className="task-header">
        <IonToolbar className="task-toolbar">

          <div className="task-header-row">
            <IonIcon
              icon={chevronBackOutline}
              className="task-back-icon"
              onClick={handleBack}
            />
            <h1 className="task-title-inline">Mobile App Redesign</h1>
          </div>

        </IonToolbar>
      </IonHeader>

      {/* ================= PAGE BODY ================= */}
      <IonContent fullscreen className="task-content">
        <div className="task-gradient"></div>

        {/* =========== Overview Section (below navbar) =========== */}
        <section className="task-hero">
          <p className="task-sub">
            Complete redesign of the mobile application with modern UI/UX
          </p>

          <div className="task-info-row">
            <span className="task-info">
              <IonIcon icon={calendarOutline} /> Dec 31, 2024
            </span>

            <span className="task-info">
              <IonIcon icon={peopleOutline} /> 5 members
            </span>
          </div>

          <div className="task-progress-top">
            <span>Overall Progress</span>
            <span className="task-progress-percent">75%</span>
          </div>

          <IonProgressBar
            value={0.75}
            className="task-progress-bar"
            type="determinate"
          />
        </section>

        {/* ================= TASK LIST ================= */}
        <section className="task-section">

          <div className="task-section-header">
            <h2>Tasks</h2>

            <button className="task-add-btn">
              <span>+</span> Add Task
            </button>
          </div>

          {/* ---------- TASK ITEM 1 ---------- */}
          <div className="task-card">
            <div className="task-card-head">
              <div className="task-left">
                <div className="task-icon done">
                  <IonIcon icon={checkmarkCircleOutline} />
                </div>
                <h3 className="task-completed">Design mockups</h3>
              </div>
              <IonIcon icon={ellipsisVertical} className="task-menu-icon" />
            </div>

            <div className="task-tags">
              <span className="badge green">Completed</span>
              <span className="badge red">HIGH</span>
            </div>

            <div className="task-assigned">
              <div className="task-avatar"></div>
              <span>Sarah</span>
            </div>
          </div>

          {/* ---------- TASK ITEM 2 ---------- */}
          <div className="task-card">
            <div className="task-card-head">
              <div className="task-left">
                <div className="task-icon done">
                  <IonIcon icon={checkmarkCircleOutline} />
                </div>
                <h3 className="task-completed">User research</h3>
              </div>
              <IonIcon icon={ellipsisVertical} className="task-menu-icon" />
            </div>

            <div className="task-tags">
              <span className="badge green">Completed</span>
              <span className="badge orange">MEDIUM</span>
            </div>

            <div className="task-assigned">
              <div className="task-avatar"></div>
              <span>John</span>
            </div>
          </div>

          {/* ---------- TASK ITEM 3 ---------- */}
          <div className="task-card">
            <div className="task-card-head">
              <div className="task-left">
                <div className="task-icon pending">
                  <IonIcon icon={checkmarkCircleOutline} />
                </div>
                <h3>Prototype testing</h3>
              </div>
              <IonIcon icon={ellipsisVertical} className="task-menu-icon" />
            </div>

            <div className="task-tags">
              <span className="badge blue">In Progress</span>
              <span className="badge yellow">LOW</span>
            </div>

            <div className="task-assigned">
              <div className="task-avatar"></div>
              <span>Emily</span>
            </div>
          </div>

        </section>
      </IonContent>

    </IonPage>
  );
};

export default TaskDetails;
