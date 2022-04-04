const addProduct=(state=[],action)=>{

    switch(action.type){
        case"addProduct":{
           
            
           let obj=action.payload
           obj.qty=1

            return(
                [...state,obj]
            )
        }
        default:
            return state
    }
}

export default addProduct