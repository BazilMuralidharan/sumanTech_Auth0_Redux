import {useAuth0} from '@auth0/auth0-react';
import { Button } from '@mui/material';

export default function Login(){
    const {isAuthenticated, loginWithRedirect, loginWithPopup} = useAuth0();
    return(
        !isAuthenticated&&(
        <div style={{display:"flex", justifyContent:"center", marginTop:"25%"}}>
            <Button variant='contained' 
            // onClick={()=> loginWithRedirect(
            //     {
            //         screen_hint: "signup",
            //     }
            // )}
            onClick={()=>loginWithPopup()}
            >
                Login
            </Button>
        </div>
        )
    )
}