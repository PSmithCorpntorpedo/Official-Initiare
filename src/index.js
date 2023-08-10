import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './Authentication/Context/AuthProvider';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
            <App />
    </AuthProvider>
);

