import { IonContent, IonHeader, IonPage } from '@ionic/react'
import Titulo from "../components/Titulo"

export default function Buscar() {
    return (
        <IonPage>
            <IonHeader>
                <Titulo />
            </IonHeader>
            <IonContent>
                <h1>Buscar</h1>
            </IonContent>
        </IonPage>
    )
}
