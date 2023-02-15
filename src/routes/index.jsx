import { BrowserRouter } from 'react-router-dom';
import { useContext} from 'react'

import { useAuth } from '../hooks/auth';

import { AppRoutes} from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(){
const data = useAuth()

console.log(data)

    return(
        <BrowserRouter>
            {/* <AppRoutes/> */}
            <AuthRoutes/>
        </BrowserRouter>
    )
}