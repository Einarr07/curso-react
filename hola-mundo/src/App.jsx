import "./App.css"
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App() {
    const format = (userName) => `@${userName}`;

    const nichol = {isFollowing: false, userName: "nicolemotoche29 ", name: "Nicole", codigo: "85316345?v=4"};

    return (
        <section>
            <TwitterFollowCard
                formatUserName={format}
                userName="einarr07"
                name="Mateo Congo"
                codigo="96399138?v=4"
            />

            <TwitterFollowCard
                formatUserName={format}
                userName="erick200011"
                name="Erick Palomo"
                codigo="75103508?v=4"
            />

            {/* Los 3 puntos son el: 'restOperator' hace que se le pasen todas las propiedades de un objeto (Generalmente es mala practica)*/}
            <TwitterFollowCard
                {...nichol}
                formatUserName={format}
            />
        </section>
    )
}