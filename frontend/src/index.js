import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/userContextProvider';
import { SubjectContextProvider } from './context/subjectContextProvider';
import { CategoryProvider } from './context/categoryContextProvider';
import { AuthContextProvider } from './context/authContextProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <AuthContextProvider>
        <SubjectContextProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </SubjectContextProvider>
      </AuthContextProvider>

    </UserContextProvider>



  </React.StrictMode>
);


