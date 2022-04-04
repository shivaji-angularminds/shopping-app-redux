const itemsPerPage=( state=5, action)=>{
    switch(action.type){
        case"itemsPerPage":{
            return state=action.payload
        } 
        default:{
            return state
        }
    }

}

export default itemsPerPage