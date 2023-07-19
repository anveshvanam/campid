import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        accountId: "04bd5836-39d6-4671-8e9c-72afb00e2442",
        accountType: "Athelet",
        cognitoRecordId: "66025dbc-58d4-40f6-92b6-c27772479ddf",
        companyName: "esse sit eiusmod ullamco et",
        deleted: false,
        id: "avinashukla2000@gmail.com",
        nameFirst: "Shukla",
        nameLast: "Avinash",
        phone: "71238712333",
        suspended: false,
        userRole: "accountOwner"
    });
    // const navigate = useNavigate()
    const headers = {
        'x-api-key': "vR7dC0yfEH7VVKyCnEovf8JjvHBsmz3g8rkHExN7",
        "Content-Type": "application/json",
        "Accept": "application/json",
    };


    const handleLogin = (email, password) => {
   
        setIsLoading(true);
        
        axios.post('/login', {
            "authenticationCredentials": {
                "username": email,
                "password": password,
                "totpCode": "in nisi"
            }
        }, { headers }).then((response) => response.data).then((data) => {
            console.log("Avinash", data);
            setUsername(email)
            setRefreshToken(data.refreshToken);
            setAccessToken(data.accessToken);
            localStorage.setItem('CampId-data', JSON.stringify(data));

            axios.get('/user/userprofiles', {
                headers: {
                    ...headers,
                    "x-access-token": accessToken,
                    "x-refresh-token": refreshToken
                }
            }).then((result) => result.data).then(data => {
                console.log(data.userProfile)
                setUser(data.userProfile);
                setIsAuthenticated(true);
                setIsLoading(false);
                
            }).catch((e) => {
                console.log(e);
                setError(e.message);
                setIsLoading(false);
            })
        }).catch(e => {
            console.log(e);
            setError(e.message);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('CampId-data'));

        if (data) {
            setRefreshToken(data.refreshToken);
            setAccessToken(data.accessToken);
            setUsername(data.username);
        }
    })

    return (
        <UserContext.Provider
            value={{
                username,
                isAuthenticated,
                error,
                handleLogin,
                setUsername,
                isloading,
                setIsLoading,
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};