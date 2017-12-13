import React from 'react'
import ReactDom from 'react-dom'
import App from './views/App.jsx'
import { AppContainer} from 'react-hot-loader'
const root = document.getElementById('root')
const render = Component =>{
    ReactDom.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        root
    )
}
render(App)

if(module.hot){
    module.hot.accept('./views/App.jsx',()=>{
        const NextApp = require('./views/App.jsx').default
        render(NextApp)
    })
}