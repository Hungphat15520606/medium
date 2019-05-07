import Axios from "axios";
import { LIST_ARTICLE, ADD_ARTICLE,DETAIL_ARTICLE } from "../constants/action.type";
import {URL} from '../constants/url'
export function getList (){
    return {type:'GET_LIST'}
}
//load all articles in component home (All articles)
export function listArticles(){
    return function(dispatch){
        Axios.get(`${URL}articles/list`)
        .then((res)=>{
            let articles= res.data
            dispatch({type:LIST_ARTICLE, articles})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
//post article to list
export function addArticle(id, text, title,description ){
    return function(dispatch){
        let token = localStorage.token
        Axios.post(`${URL}article/add`,{id,title,description,text},{
            headers: {
                'access_token': `${token}`,
            }
        })
        .then((res)=>{
            const article={
                id:id,
                text:text,
                title:title,
                description:description
            }
            dispatch({type:ADD_ARTICLE,article})
            if(res.status===1) console.log(res.message)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
//detail article
export function detailArticle(id){
    return function(dispatch){
        axios.get(`${URL}article/:${id}`)
        .then((res)=>{
            let article=res.data
            dispatch({type:DETAIL_ARTICLE},article)
        })
    }
}







