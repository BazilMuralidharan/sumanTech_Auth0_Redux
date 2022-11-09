import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardContent, Typography, CardMedia, Backdrop, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logout from "./Logout";
import { loginUserDetail } from "../redux/authReducer/AuthSlice";
export default function Profile() {
  const { isAuthenticated, user, isLoading } = useAuth0();

  const dispatch  = useDispatch()
  const {auth:{user: reduxUser}} = useSelector(state=>state)
  
  useEffect(()=>{
    dispatch(loginUserDetail(
        user
    ))
  },[isAuthenticated])

  
  return (
    isAuthenticated && (
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
   
        <div>
        <Typography variant="h5" component="h5">{`👻 Welcome `}</Typography>
        <Typography variant="h2" component="h1">{user?.nickname}</Typography>
        </div>
        {/* {JSON.stringify(user, null, 2)} */}
        <Card
          sx={{
            width: "320px",
          }}
        >
          <CardContent>
            <CardMedia
              component="img"
              height="304"
              sx={{objectFit:"cover"}}
              image={user?.picture}
              alt={user?.nickname}
              
            />
            <Typography variant="body2">
             Name: {user?.nickname}
            </Typography>
            <Typography variant="body2">
             Account: {user?.sub}
            </Typography>
          </CardContent>
        </Card>
        <Logout/>
        <Typography variant="h5" component="h5">email: {reduxUser?.email ?? "Email Not Found"}</Typography>       
      </div>
    )
  );
}
