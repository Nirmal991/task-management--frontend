import React, { useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  useIonViewWillEnter,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { checkmarkCircleOutline, appsOutline, peopleOutline, flashOutline } from 'ionicons/icons';
import './Index.css';

const Index: React.FC = () => {
  const navigate = useHistory();

  // keep same behavior: if authenticated redirect to /home
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      navigate.push('/home');
    }
  }, [navigate]);

  // optional ionic lifecycle hook for placeholder fetch
  useIonViewWillEnter(() => {
    // fetch any data if needed
  });

  return (
    <IonPage>
      {/* Header with subtle safe area top */}
      <IonHeader translucent>
        <IonToolbar className="index-gradient toolbar-no-shadow">
          <div className="index-header-inner">
            <div className="index-hero">
              <div className="index-icon">
                <IonIcon icon={checkmarkCircleOutline} />
              </div>
              <IonText>
                <h1 className="index-title">
                  Manage Projects
                  <br />
                  <span className="index-accent">Effortlessly</span>
                </h1>
              </IonText>
              <IonText className="index-sub">
                <p>
                  Stay organized, collaborate with your team, and track progress all in one place
                </p>
              </IonText>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="index-content">
        <div className="index-card-wrap">
          <IonGrid>
            <IonRow className="index-features-row">
              <IonCol size="12">
                <IonCard className="feature-card ion-no-margin">
                  <IonCardContent className="feature-inner">
                    <div className="feature-left">
                      <div className="feature-icon bg-primary">
                        <IonIcon icon={appsOutline} />
                      </div>
                      <div>
                        <IonText className="feature-title">Project Tracking</IonText>
                        <IonText className="feature-sub">Monitor all your projects</IonText>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="12">
                <IonCard className="feature-card ion-no-margin">
                  <IonCardContent className="feature-inner">
                    <div className="feature-left">
                      <div className="feature-icon bg-accent">
                        <IonIcon icon={peopleOutline} />
                      </div>
                      <div>
                        <IonText className="feature-title">Team Collaboration</IonText>
                        <IonText className="feature-sub">Work together seamlessly</IonText>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="12">
                <IonCard className="feature-card ion-no-margin">
                  <IonCardContent className="feature-inner">
                    <div className="feature-left">
                      <div className="feature-icon bg-success">
                        <IonIcon icon={flashOutline} />
                      </div>
                      <div>
                        <IonText className="feature-title">Real-time Updates</IonText>
                        <IonText className="feature-sub">Stay informed instantly</IonText>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* CTA Buttons */}
          <div className="index-cta-wrap">
            <IonButton expand="block" className="cta-primary" onClick={() => navigate.push('/signup')}>
              Get Started
            </IonButton>

            <IonButton fill="outline" expand="block" className="cta-outline" onClick={() => navigate.push('/login')}>
              Sign In
            </IonButton>
          </div>
        </div>

        {/* bottom spacer to avoid tab overlap */}
        <div className="index-bottom-space" />
      </IonContent>
    </IonPage>
  );
};

export default Index;
