import { Button } from "flowbite-react";
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const auth=async()=>{
    const provider =new GoogleAuthProvider()
    const auth=getAuth(app);
    provider.setCustomParameters({prompt:"select_account"})
    try{
      const result=await signInWithPopup(auth,provider)
      const res = await fetch('/api/auth/google',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          name:result.user.displayName,
          email:result.user.email,
          googlePhotoUrl:result.user.photoURL
        }),
      })
      const data=await res.json()
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    }catch(error)
    {
      console.log(error)
    }
  }
  return (
    <Button type='button' className='h-10 rounded-lg bg-gradient-to-tl from-orange-400 to-amber-200 text-rose-950' outline 
    onClick={auth}>
        Continue with Google
    </Button>
  )
}
