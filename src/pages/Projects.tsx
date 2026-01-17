import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonIcon,
  IonProgressBar,
  IonAlert,
  IonModal,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
} from "@ionic/react";
import { ellipsisVertical, add } from "ionicons/icons";

import "./Projects.css";

const Projects: React.FC = () => {
  const [showProject, setShowProject] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);

  // UI-only dummy members
  const members = [
    { id: "1", name: "John Doe", email: "jhon@gmail.com" },
    { id: "2", name: "Sarah Smith", email: "sahara@gmail.com" },
    { id: "3", name: "Mike Johnson", email: "mike@gmail.com" },
    { id: "4", name: "Emma Brown", email: "emma#gmail.com" },
  ];

  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const toggleMember = (id: string) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((m) => m !== id)
        : [...prev, id]
    );
  };

  return (
    <IonPage>
      <IonHeader translucent className="proj-header">
        <IonToolbar className="proj-toolbar">
          <IonTitle className="proj-title">Projects</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="proj-content">
        <div className="proj-gradient" />

        {/* Search */}
        <section className="proj-search-wrapper">
          <IonSearchbar
            placeholder="Search projects..."
            className="proj-searchbar"
            mode="ios"
          />
        </section>

        {/* Header */}
        <section className="proj-section">
          <div className="proj-section-header">
            <span className="proj-section-title">ALL PROJECTS (5)</span>

            <button
              className="proj-new-btn"
              onClick={() => setShowProject(true)}
            >
              <IonIcon icon={add} className="proj-new-icon" />
              <span>New</span>
            </button>
          </div>

          {/* PROJECT CARDS (STATIC UI) */}
          <div className="proj-card">
            <div className="proj-card-header">
              <h3>Mobile App Redesign</h3>
              <IonIcon icon={ellipsisVertical} className="proj-more-icon" />
            </div>

            <div className="proj-badge in-progress">In Progress</div>
            <p className="proj-tasks">6/8 tasks completed</p>

            <div className="proj-progress-row">
              <IonProgressBar value={0.75} className="proj-progress-bar primary" />
              <span className="proj-progress-percent">75%</span>
            </div>

            <div className="proj-members-row">
              <span className="proj-members-label">5 members</span>
            </div>
          </div>
        </section>

        {/* CREATE PROJECT ALERT */}
        <IonAlert
          isOpen={showProject}
          header="Create Project"
          message="Enter project details"
          inputs={[
            {
              name: "project",
              type: "text",
              placeholder: "Project Name",
            },
            {
              name: "description",
              type: "text",
              placeholder: "Project Description",
            },
          ]}
          buttons={[
            {
              text: "Add Members",
              handler: () => {
                setShowProject(false);
                setShowMembersModal(true);
              },
            },
            {
              text: "Cancel",
              role: "cancel",
              handler: () => setShowProject(false),
            },
            {
              text: "Create",
              handler: () => setShowProject(false),
            },
          ]}
        />

        {/* MEMBERS MODAL */}
        <IonModal
          isOpen={showMembersModal}
          onDidDismiss={() => setShowMembersModal(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Select Members</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">
            <IonList>
              {members.map((user) => (
                <IonItem key={user.id}>
                  <IonCheckbox
                    slot="start"
                    checked={selectedMembers.includes(user.id)}
                    onIonChange={() => toggleMember(user.id)}
                  />
                  <IonLabel>
                    <h2>{user.name}</h2>
                    <p className="member-email">{user.email}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>

            <IonButton
              expand="block"
              className="ion-margin-top"
              onClick={() => setShowMembersModal(false)}
            >
              Done
            </IonButton>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Projects;
