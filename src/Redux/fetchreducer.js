const intialstate = {laoding: false, users: [], err: ""};
const reducer = (state=intialstate, action)=>{
    switch(action.type){
        case "userrequest":
            return {
                ...state,
                loading: true,
            }
        case "resquestsuccessful":
            return {                
                loading: false,
                users: action.payload,
                error: ""
            }
        case "resquestfailed":
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state;
    }
}
export default reducer;