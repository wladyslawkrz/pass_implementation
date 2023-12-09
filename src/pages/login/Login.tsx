import {AuthButton, AuthForm, AuthHeader, AuthInput, AuthInputContainer, AuthInputLabel, AuthPage} from "./styled.ts";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {MENU} from "../../consts/routes.ts";

const Login = () => {
    const [loginCredentials, setLoginCredentials] = useState<{ login: string, password: string }>({
        login: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleSubmitClick = () => {
        if (loginCredentials.login === 'admin' && loginCredentials.password === 'admin') {
            navigate(MENU)
        } else {
            alert("Неверный логин или пароль")
        }
    }

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginCredentials({...loginCredentials, login: e.target.value})
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginCredentials({...loginCredentials, password: e.target.value})
    }

    return (
        <AuthPage>
            <AuthForm>
                <AuthHeader>
                    Пожалуйста, войдите в кабинет
                </AuthHeader>
                <AuthInputContainer>
                    <AuthInputLabel>Логин: </AuthInputLabel>
                    <AuthInput onChange={handleLoginChange}/>
                </AuthInputContainer>
                <AuthInputContainer>
                    <AuthInputLabel>Пароль: </AuthInputLabel>
                    <AuthInput type={"password"} onChange={handlePasswordChange}/>
                </AuthInputContainer>
                <AuthButton onClick={handleSubmitClick}>Войти</AuthButton>
            </AuthForm>
        </AuthPage>
    );
};

export default Login;