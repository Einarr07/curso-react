import { createRoot } from 'react-dom/client'
import {Fragment} from "react";
import {App} from './App.jsx'
import "./index.css"
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

/* Estilos de text
* PascalCase: este se utiliza para los componentes
* camelCase: para declara variables
* snake_case: generalmente se utiliza en python
* kabab-cas: para nombrar los directorios
* */



createRoot(document.getElementById('root')).render(
    <>
        <TwitterFollowCard userName="einarr07" name="Mateo Congo" />
        <TwitterFollowCard userName="einarr07" name="Mateo Congo" />
    </>
)
