import { IonContent, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react'
import Titulo from '../components/Titulo'

export default function Perfil() {
    return (
        <IonPage>
            <IonHeader>
                <Titulo />
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            Foto
                        </IonCol>
                        <IonCol size="2">
                            Posts
                        </IonCol>
                        <IonCol size="3">
                            Seguidores
                        </IonCol>
                        <IonCol size="3">
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
                                COmpartir perfil
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
