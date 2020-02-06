import React from 'react';

export const UserContext = React.createContext({
    name: null,
    age: null,
    token: null,
    auth: false
});