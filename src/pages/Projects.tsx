import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonIcon,
  IonProgressBar,
} from "@ionic/react";
import { ellipsisVertical, add } from "ionicons/icons";

import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent className="proj-header">
        <IonToolbar className="proj-toolbar">
          <IonTitle className="proj-title">Projects</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="proj-content">
        {/* blue gradient background */}
        <div className="proj-gradient" />

        {/* search bar card */}
        <section className="proj-search-wrapper">
          <IonSearchbar
            placeholder="Search projects..."
            className="proj-searchbar"
            mode="ios"
          />
        </section>

        {/* section header */}
        <section className="proj-section">
          <div className="proj-section-header">
            <span className="proj-section-title">ALL PROJECTS (5)</span>

            <button className="proj-new-btn">
              <IonIcon icon={add} className="proj-new-icon" />
              <span>New</span>
            </button>
          </div>

          {/* Project card 1 */}
          <div className="proj-card">
            <div className="proj-card-header">
              <h3>Mobile App Redesign</h3>
              <IonIcon icon={ellipsisVertical} className="proj-more-icon" />
            </div>

            <div className="proj-badge in-progress">In Progress</div>

            <p className="proj-tasks">6/8 tasks completed</p>

            <div className="proj-progress-row">
              <IonProgressBar
                className="proj-progress-bar primary"
                value={0.75}
              />
              <span className="proj-progress-percent">75%</span>
            </div>

            <div className="proj-members-row">
              <div className="proj-members-avatars">
                <span className="avatar avatar-1" />
                <span className="avatar avatar-2" />
                <span className="avatar avatar-3" />
              </div>
              <span className="proj-members-label">5 members</span>
            </div>
          </div>

          {/* Project card 2 */}
          <div className="proj-card">
            <div className="proj-card-header">
              <h3>Website Launch</h3>
              <IonIcon icon={ellipsisVertical} className="proj-more-icon" />
            </div>

            <div className="proj-badge in-progress">In Progress</div>

            <p className="proj-tasks">5/12 tasks completed</p>

            <div className="proj-progress-row">
              <IonProgressBar
                className="proj-progress-bar secondary"
                value={0.45}
              />
              <span className="proj-progress-percent">45%</span>
            </div>

            <div className="proj-members-row">
              <div className="proj-members-avatars">
                <span className="avatar avatar-1" />
                <span className="avatar avatar-2" />
                <span className="avatar avatar-3" />
              </div>
              <span className="proj-members-label">3 members</span>
            </div>
          </div>

          {/* Project card 3 (simple state) */}
          <div className="proj-card">
            <div className="proj-card-header">
              <h3>Marketing Campaign</h3>
              <IonIcon icon={ellipsisVertical} className="proj-more-icon" />
            </div>

            <div className="proj-badge near-completion">Near Completion</div>

            <p className="proj-tasks">10/11 tasks completed</p>

            <div className="proj-progress-row">
              <IonProgressBar
                className="proj-progress-bar primary"
                value={0.9}
              />
              <span className="proj-progress-percent">90%</span>
            </div>

            <div className="proj-members-row">
              <div className="proj-members-avatars">
                <span className="avatar avatar-1" />
                <span className="avatar avatar-2" />
                <span className="avatar avatar-3" />
              </div>
              <span className="proj-members-label">4 members</span>
            </div>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
