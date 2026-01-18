import React, { useState, useEffect } from "react";
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
  IonSpinner,
} from "@ionic/react";  
import { ellipsisVertical, add } from "ionicons/icons";

import "./Projects.css";
import { getMembersOfOrg } from "../store";

type Member = {
  id: string;
  name: string;
  email: string;
};

const Projects: React.FC = () => {
  const [showProject, setShowProject] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [loadingMembers, setLoadingMembers] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  // Get active org from localStorage
  const getActiveOrgId = () => {
    try {
      const activeOrg = localStorage.getItem("orgInfo");
      if (activeOrg) {
        const parsedOrg = JSON.parse(activeOrg);
        return parsedOrg.id;
      }
    } catch (e) {
      console.error("Error parsing active org", e);
    }
    return null;
  };

  // Fetch members when modal opens
  const fetchMembers = async () => {
    const orgId = getActiveOrgId();
    
    if (!orgId) {
      console.error("No active organization selected");
      return;
    }

    try {
      setLoadingMembers(true);
      const response = await getMembersOfOrg(orgId);
      
      // Adapt based on your API response structure
      const membersData = response.data.data || response.data;
      setMembers(membersData);
    } catch (error) {
      console.error("Failed to fetch members:", error);
      // Optionally show an error toast/alert here
    } finally {
      setLoadingMembers(false);
    }
  };

  const toggleMember = (id: string) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((m) => m !== id)
        : [...prev, id]
    );
  };

  const handleAddMembers = () => {
    setShowProject(false);
    setShowMembersModal(true);
    // Fetch members when opening the modal
    fetchMembers();
  };

  const handleCreateProject = () => {
    // Here you would call your create project API
    console.log("Creating project:", {
      name: projectName,
      description: projectDescription,
      members: selectedMembers,
    });
    
    // Reset form
    setProjectName("");
    setProjectDescription("");
    setSelectedMembers([]);
    setShowProject(false);
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
              value: projectName,
            },
            {
              name: "description",
              type: "text",
              placeholder: "Project Description",
              value: projectDescription,
            },
          ]}
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                setProjectName("");
                setProjectDescription("");
                setShowProject(false);
              },
            },
            {
              text: "Add Members",
              handler: (data) => {
                setProjectName(data.project || "");
                setProjectDescription(data.description || "");
                handleAddMembers();
              },
            },
            {
              text: "Create",
              handler: (data) => {
                setProjectName(data.project || "");
                setProjectDescription(data.description || "");
                handleCreateProject();
              },
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
            {loadingMembers && (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <IonSpinner />
                <p>Loading members...</p>
              </div>
            )}

            {!loadingMembers && members.length === 0 && (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <p>No members found in this organization</p>
              </div>
            )}

            {!loadingMembers && members.length > 0 && (
              <IonList key="members-list">
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
            )}

            <IonButton
              expand="block"
              className="ion-margin-top"
              onClick={() => {
                console.log("Selected members:", selectedMembers);
                setShowMembersModal(false);
                // Optionally reopen the project alert to continue
                setShowProject(true);
              }}
            >
              Done ({selectedMembers.length} selected)
            </IonButton>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Projects;