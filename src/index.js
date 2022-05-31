
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import Calculadora from './components/Calculadora.js';

const App = () =>{
    return(
        <>
            <Calculadora/>
        
        </>
    )

}

const root = ReactDOMClient.createRoot(
    document.getElementById('app')
);

root.render(
    <App />
)
