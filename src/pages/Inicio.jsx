import { useEffect, useState } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import Titulo from "../components/Titulo"
import Publicacion from '../components/Publicacion'

export default function Inicio() {

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(response => response.json())
            .then(json => setPost(json))
    }, [])


    return (
        <IonPage>
            <Titulo />
            <IonContent>
                {post.map((post, index) =>
                    <Publicacion descripcion={post.tittle} post={post.url} />
                )}
            </IonContent>
        </IonPage>
    )
}
