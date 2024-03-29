import { IonContent, IonPage, IonHeader, IonToolbar, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { person, search, home } from 'ionicons/icons';

import Inicio from './Inicio';
import Buscar from './Buscar';
import Perfil from './Perfil';
import Mensajes from './Mensajes';

export default function Pestañas() {
    return (
        <IonReactRouter basename={import.meta.env.BASE_URL}>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/inicio">
                        <Inicio />
                    </Route>
                    <Route exact path="/buscar">
                        <Buscar />
                    </Route>
                    <Route path="/perfil">
                        <Perfil />
                    </Route>
                    <Route exact path="/mensajes">
                        <Mensajes />
                    </Route>

                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/inicio">
                        <IonIcon aria-hidden="true" icon={home} />
                        <IonLabel>Inicio</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/buscar">
                        <IonIcon aria-hidden="true" icon={search} />
                        <IonLabel>Buscar</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/perfil">
                        <IonIcon aria-hidden="true" icon={person} />
                        <IonLabel>Perfil</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}
