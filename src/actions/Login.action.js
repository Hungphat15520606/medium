import {SIGN_IN, SIGN_UP} from '../constants/action.type'
import Axios from 'axios';
import {URL} from '../constants/url'
import cookies from 'universal-cookie';

export function SignIn(email,password){
    return function(dispatch){
        Axios.post(`${URL}users/login`,{email,password})
        .then(res=> {
            dispatch({type:SIGN_IN})
            if (res.data.status===1) {
                alert("Đăng nhập thành công!!")
                const authToken = res.data.data.token;
                localStorage.setItem('token', authToken);    
            };
        })
        .catch(error =>{
                console.log(error)
            }
        );  
    }
}
export function SignUp(email,password,name){
    return function(dispatch){
        Axios.post(`${URL}users/register`,{email,password,name})
        .then(res=>{
            dispatch({type:SIGN_UP})
            if(res.status===201) alert("Vui lòng vài email để xác thực!");
            if(res.status===403) alert("Email đã tồn tại!");
        })
        .catch(error=>{
                console.error(error)
            }
        )
    }
}
