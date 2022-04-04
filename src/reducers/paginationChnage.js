const paginationChange=(state={start:0,end:5},action)=>{
    switch(action.type){
        case"paginationChange":{

            state.start=action.payload.start
            state.end=action.payload.end
            return state
        }
        default:{
            return state
        }
    }

}

export default paginationChange