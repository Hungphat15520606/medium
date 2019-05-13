import { createStore , combineReducers , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer,topArticle } from './home.reducer';
import { LoginReducer, checkLogin, detailUser} from './Login.Reducer';
import { clapReducer,detailArticleReducer,follow} from './post.reducer';

const reducer = combineReducers({
   list: homeReducer,
   userLogin: LoginReducer,
   clap: clapReducer,
   article: detailArticleReducer,
   checkLogin: checkLogin,
   user : detailUser,
   toplist: topArticle,
   follow: follow
})
export const store = createStore(reducer,applyMiddleware(thunk));