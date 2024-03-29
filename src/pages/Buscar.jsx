import { IonContent, IonHeader, IonPage, IonSearchbar } from '@ionic/react'
import Titulo from "../components/Titulo"

export default function Buscar() {
    return (
        <IonPage>
            <Titulo/>
            <IonContent>
                Buscar
            </IonContent>
        </IonPage>
    )
}
