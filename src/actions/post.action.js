import {CLAP_ARTICLE,UNFOLLOW_USER,FOLLOW_USER,CHECK_FOLLOW} from '../constants/action.type'
import {Article,User} from '../constants/api.constants'
import Axios from 'axios';
export function clap(id){
    return function(dispatch){
        let token = localStorage.token
        Axios.get(Article.ARTICLE_CLAP.replace('{id}',id),{
            headers: {
                'access_token': `${token}`,          
            }
        })
        .then((res) => {
            const clap = res.data.data.claps
            dispatch({type:CLAP_ARTICLE,clap})        
        })
        .catch((err)=>console.log(err))
    }
}

export function follow(author_id){
    return function(dispatch){
        let token = localStorage.token
        const id=author_id
        Axios.post(User.USER_FOLLOW.replace('{id}',id),id,{
            headers: {
                'access_token': `${token}`,
            }
        })
        .then((res) => {
            console.log(res)
            dispatch({type:FOLLOW_USER})
            if(res.data.status===1){
                alert("follow success!")
            }          
        })
        // .catch((err)=>{
        //    console.log(err)
        // })
    }
}

export function unfollow(author_id){
    return function(dispatch){
        const id=author_id
        let token = localStorage.token
        Axios.post(User.USER_UNFOLLOW.replace('{id}',id),id,{
            headers: {
                'access_token': `${token}`,          
            }
        })
        .then((res)=>{
            console.log(res)
            dispatch({type:UNFOLLOW_USER})
            if(res.data.status===1){
                alert("unfollow success!")
            }
        })
        .catch((err)=>alert(err.message))
    }
}

export function checkFollow(author,follows){
    return function(dispatch){    
            dispatch({type:CHECK_FOLLOW,author,follows})          
            }
   }
     
