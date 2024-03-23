import { IonContent, IonPage, IonText, IonItem, IonInput, IonButton } from '@ionic/react';
import logo from '../assets/img/logo.png';
import {Link} from "react-router-dom";

export default function Acceso() {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div id="container">
                    <img src={logo} width={100} />
                    <IonText>
                        <h1>Iniciar sesión</h1>
                    </IonText>
                    <br/>
                    <p>
                        Un gusto verte de nuevo!
                    </p>
                    <br />
                    <IonItem>
                        <IonInput label="Correo electrónico" labelPlacement="floating" color="danger"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput label="Contraseña" labelPlacement="floating" color="danger" type='password'></IonInput>
                    </IonItem>
                    <br />
                    <br />
                    <Link to="/inicio">
                    <IonButton color="tertiary" expand="block" size="default" style={{ margin: '0 10px' }}>Iniciar sesión</IonButton>
                    </Link>
                    <br />
                    <br />
                    <br />
                    <IonText color="primary">
                        <a href=""> ¿Olvidaste tu contraseña?</a>
                    </IonText>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>
                        <IonText color="">
                            ¿No tienes cuenta? &nbsp;
                            <IonText color="danger">
                                <Link color="danger" to="/registro">Regístrate</Link>
                            </IonText>
                        </IonText>
                    </p>
                </div>
            </IonContent>
        </IonPage >
    )
}
