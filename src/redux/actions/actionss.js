// import { auth,googleAuthProvider } from "../../firebase";
import * as types from "./actionType";

export const googleSignInStart = () => ({
    type: types.GOOGLE_SIGN_IN_START,
  });
  
  export const googleSignInSuccess = (user) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
  });
  
  export const googleSignInFail = (error) => ({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error,
  });
// export const googleSignInInitiate = () => {

//     return async dispatch => {
//         dispatch(googleSignInStart());
//         try {
//             const { user } = await auth.signInWithPopup(googleAuthProvider);
//             dispatch(googleSignInSuccess(user));
//         } catch (error) {
//             dispatch(googleSignInFail(error.message));
//         }
//     };
// };


// export const googleSignInInitiate = () => {
//     return async () => {
//         try {
//             const { user } = await auth.signInWithPopup(googleAuthProvider);
//             // Dispatch the plain objects synchronously
//             return googleSignInSuccess(user);
//         } catch (error) {
//             return googleSignInFail(error.message);
//         }
//     };
// };