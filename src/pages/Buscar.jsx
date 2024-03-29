import { IonContent, IonHeader, IonPage, IonSearchbar } from '@ionic/react'
import Titulo from "../components/Titulo"

export default function Buscar() {
    return (
        <IonPage>
            <IonContent>
                <IonSearchbar color="light" placeholder="Buscar"></IonSearchbar>
            </IonContent>
        </IonPage>
    )
}
