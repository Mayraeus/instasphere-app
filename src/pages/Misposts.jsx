import { useState, useEffect } from "react"
import Publicacion from "../components/Publicacion"
import {IonGrid} from "@ionic/react"

export default function Misposts() {

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://instasphere-beta.vercel.app/publicaciones/')
            .then(response => response.json())
            .then(json => setPost(json))
    }, [])

    return (
        <IonGrid>
            {post.map((post, index) =>
                <Publicacion descripcion={post.descripcion} post={'https://instasphere-beta.vercel.app'} />
            )}
        </IonGrid>
    )

}