const reducer = (state = 0, action)=>{
    switch(action.type){
    case "addtocart":
            return state + action.payload;  
        case "removefromcart":
            return state - action.payload;
        case "addtoamount":
            return state + action.payload;
        case "removefromamount":
            return state - action.payload;
        default:
            return state;        
    }
}
export default reducer;