export const addTask = (task)=>{
    return (dispatch)=> {dispatch({type: "addtask", payload: task})}
}
export const addValue = (value)=>{
    return (dispatch)=> {dispatch({type:"addtoamount", payload: value})}
}
export const removeValue = (value)=>{
    return (dispatch)=> {dispatch({type:"removefromamount", payload: value})}
}
export const addToCart = (value)=>{
    return (dispatch)=> {dispatch({type:"addtocart", payload: value})}
}
export const removeFromCart = (value)=>{
    return (dispatch)=> {dispatch({type:"removefromcart", payload: value})} 
}
export const userRequest = ()=>{
    return (dispatch) => {
        dispatch({type: "userrequest"})
    }
}
export const userRequestSuccessful = (users)=>{
    return (dispatch)=>{
        dispatch({
            type: "resquestsuccessful",
            payload: users
        })
    }
}
export const userRequestFailed = (error)=>{
    return (dispatch)=>{
        dispatch({
            type: "resquestfailed",
            payload: error
        })
    }
}