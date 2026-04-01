import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

enum AuthStatus {
    checking = 'checking', 
    auth = 'auth',
    unauth = 'unauth',
}

interface AuthState {
    status:AuthStatus;
    token?:string;
    user?: IUser;
    isChecking:boolean;
    isAuth:boolean;
    loginWithEmailPassword: (email:string, password:string) => void;
    logout: () => void;
}

interface IUser {
    name:string;
    email:string;
}

export const AuthContext = createContext({} as AuthState);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children } : PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.auth);
        }, 1500)
    })

    const loginWithEmailPassword = (email:string, password:string) => {
        setUser({
            name: "Juanpa",
            email
        });
    }

    const logout = () => {
        setUser(undefined);
        setStatus(AuthStatus.checking);
    }

    return (
        <AuthContext.Provider value={{
            status: status,
            isChecking: status === AuthStatus.checking,
            isAuth: status === AuthStatus.auth,
            loginWithEmailPassword,
            logout,
            user
        }} >
            {children}
        </AuthContext.Provider>
    )
}