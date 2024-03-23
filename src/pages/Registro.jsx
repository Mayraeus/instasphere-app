import { IonContent, IonPage, IonText, IonItem, IonInput, IonButton, IonCheckbox } from '@ionic/react';
import { Link } from "react-router-dom";

export default function Registro() {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText><h1>Regístrate</h1></IonText>
        <br />
        <IonInput label="Correo electrónico" labelPlacement="stacked" color="danger" type="email" autoFocusfill=""></IonInput>
        <IonInput label="Nombre completo" labelPlacement="stacked" color="danger"></IonInput>
        <IonInput label="Nombre de usuario" labelPlacement="stacked" color="danger"></IonInput>
        <IonInput label="Contraseña" labelPlacement="stacked" color="danger" type='password'></IonInput>
        <br />
        <br />
        <IonCheckbox labelPlacement="end">Estoy de acuerdo con los teminos y condiciones</IonCheckbox>
        <br />
        <br />
        <IonButton color="tertiary" expand="block">Regístrate</IonButton>
        <br />
        <br />
        <br />
        <p>
          <p className='ion-text-center'>¿Ya tienes una cuenta? &nbsp;
            <IonText color="danger">
              <Link color="danger" to="/">Iniciar sesión</Link>
            </IonText>
          </p>
        </p>
      </IonContent>
    </IonPage >
  )
}
