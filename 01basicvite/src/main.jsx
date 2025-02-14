import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


const reactElement = {
    type: "a",
    props : {
        href: "https://google.com",
        target:'_blank',
    },
    children: "Click me to visit Google."

}


function MyApp(){
    return (
        <div>
            <h1>Custom React App</h1>
            
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>

)

const areactElement = React.createElement(
    'a',
    {href : "https://google.com",target:"_blank"},
    "click me to Visit Google"
)

createRoot(document.getElementById('root')).render(

    // <MyApp/>
    // AnotherElement it's working
    areactElement



)
