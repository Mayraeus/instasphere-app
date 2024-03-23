import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import image from '../assets/img/image.jpg'

export default function Publicacion() {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src={image} />
      <IonCardHeader>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  )
}
