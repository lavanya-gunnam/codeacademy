import { GOOGLE_SIGN_IN_FAIL, GOOGLE_SIGN_IN_START, GOOGLE_SIGN_IN_SUCCESS } from "../actions/actionType";
import * as types from "../actions/actionType";

const initialstate={
    loading:false,
    currentUser:null,
    error:null,
};
const userReducer =(state=initialstate,action)=>{
    switch (action.type){
        case GOOGLE_SIGN_IN_START:
            return {
                ...state,
                loading : true,
                error: null
            } ;
            case GOOGLE_SIGN_IN_SUCCESS:
            return {
                ...state,
                loading :false,
                user: action.payload,
                error: null
            } ;
            case GOOGLE_SIGN_IN_FAIL:
            return {
                ...state,
                loading : false,
                error: action.payload
            } ;
            default:
                return state;
    }
};
export default userReducer;