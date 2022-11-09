import {useAuth0} from '@auth0/auth0-react'
import { Button } from '@mui/material';


import { useDispatch } from 'react-redux';
import { logoutUserDetail } from '../redux/authReducer/AuthSlice';

export default function Logout(){
    const {isAuthenticated, logout} = useAuth0();
    const dispatch = useDispatch()

    const userLogout=()=>{
        logout()
        dispatch(logoutUserDetail())
    }
    return(
        isAuthenticated&&(
        <div>
            <Button variant='contained' onClick={userLogout}>
                Logout
            </Button >
        </div>
        )
    )
}