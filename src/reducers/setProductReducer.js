
const setProduct=(state=[],action)=>{

    switch(action.type){
        case"setProduct":{
            state=action.payload
            return(
                [...state]
            )
        }
        default:
            return state
    }
}

export default setProduct