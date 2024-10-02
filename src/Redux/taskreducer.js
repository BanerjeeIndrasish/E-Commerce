let ID = 0;
// let initialtask = [{description: 0}];
const reducer = (state = [], action)=>{
    switch(action.type){
        case "addtask":
            return [
                ...state,
                {
                id: ++ID,
                description: action.payload,
                resolve: false,
                }            
            ]
        
        default:
            return state;        
    }
}
export default reducer;


        