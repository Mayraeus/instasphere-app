import { IonHeader, IonToolbar, IonGrid, IonCol, IonRow, IonIcon } from '@ionic/react'
import { paperPlane } from 'ionicons/icons'
import logo2 from '../assets/img/logo2.png';
import { Link } from 'react-router-dom'

export default function Titulo({ mostrar = true }) {
    return (
        <IonHeader translucent={true}>
            <IonToolbar>
                <IonGrid>
                    <IonRow>
                        <IonCol size="11">
                            <h1 className='instasphere'>
                                <img src={logo2} width="24px" alt="" style={{ marginRight: '13px' }} />
                                Instasphere
                            </h1>
                        </IonCol>
                        <IonCol size="1">
                            {mostrar &&
                                <Link to="/mensajes">
                                    <IonIcon icon={paperPlane} style={{ paddingTop: '8px', color: 'black', fontSize: '20px' }} />
                                </Link>
                            }
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    )
}
