import { createRoot } from 'react-dom/client'
import "./index.css"
import {App} from "./App.jsx";

/* Estilos de text
* PascalCase: este se utiliza para los componentes
* camelCase: para declara variables
* snake_case: generalmente se utiliza en python
* kabab-cas: para nombrar los directorios
* */



createRoot(document.getElementById('root')).render(
    <>
       <App />
    </>
)
