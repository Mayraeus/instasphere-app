import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonButton, IonAvatar, IonLabel, IonSegment, IonSegmentButton, IonIcon } from '@ionic/react'
import Titulo from '../components/Titulo'
import Misposts from './Misposts';
import Misetiquetas from './Misetiquetas';

import { gridOutline, albumsOutline } from 'ionicons/icons';

export default function Perfil() {

    const [pagina, setPagina] = useState('publicaciones')

    const vista = () => {
        let value = e.traget.value
        setPagina(value)
    }

    return (
        <IonPage>
            <IonHeader>
                <Titulo />
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            <IonAvatar>
                                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            </IonAvatar>
                        </IonCol>
                        <IonCol size="2">
                            <IonLabel>
                                11
                            </IonLabel>
                            <br />
                            Posts
                        </IonCol>
                        <IonCol size="3">
                            <IonLabel>
                                197
                            </IonLabel>
                            <br />
                            Segidores
                        </IonCol>
                        <IonCol size="3">
                            <IonLabel>
                                74
                            </IonLabel>
                            <br />
                            Seguidos
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="6">
                            <IonButton size='small' expand='block'>
                                Editar Perfil
                            </IonButton>
                        </IonCol>
                        <IonCol size="6">
                            <IonButton size='small' expand='block'>
                                Compartir perfil
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonSegment value="publicaciones">
                            <IonSegmentButton value="publicaciones" onClick={vista}>
                                <IonIcon icon={gridOutline}></IonIcon>
                            </IonSegmentButton>
                            <IonSegmentButton value="etiquetas" onClick={vista}>
                                <IonIcon icon={albumsOutline}></IonIcon>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonRow>
                    <IonRow>
                        {pagina == 'publicaciones' ? <Misposts /> : <Misetiquetas />}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}