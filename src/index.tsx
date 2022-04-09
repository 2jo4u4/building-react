import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import App from './pages/index'

const container = document.getElementById('root') as Element
const root = createRoot(container)
root.render(<App tab="home" />)
