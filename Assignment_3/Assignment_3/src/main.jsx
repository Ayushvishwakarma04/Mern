import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TextUpdater from './TextUpdater.jsx'
import Form from './Form.jsx'
import UserCard from './UserCard.jsx'
import Button from './Button.jsx'
import LoginForm from './LoginForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='flex items-center justify-center pt-5 mb-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-4xl font-bold p-4 shadow-lg'>Assignment 3</h1>
    <App />
    <TextUpdater/>
    <Form/>
    <UserCard name="Ayush" email="ayush@gmail.com"/>
    <Button/>
    <LoginForm/>
  </StrictMode>,
)
