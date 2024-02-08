import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from '../firebase';
function Google(){
    const [value, setValue] = useState("");

    const handlegoogleClick = () => {
      signInWithPopup(auth, googleAuthProvider).then((data) => {
        setValue(data.user.email)
        localStorage.setItem("email", data.user.email)
      })
    };
    
    useEffect(() => {
      setValue(localStorage.getItem("email"))
    }, []);
    return(
        <> </>

    )
}
export default Google();
