
const setProduct=(state={rawData:[],filterData:[]},action)=>{

    switch(action.type){
        case"setProduct":{
            state.rawData=action.payload
            return(
                {...state,rawData:action.payload}
            )
        }
        case"filter":{
            console.log(action.sort)
            let array=state.rawData.slice(action.payload.start,action.payload.end)
            if(action.sort==="sortHighToLow"){
               
    
                let arr=array.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                     state.filterData=array
                     console.log(array)
                     array=arr
    
            }else if(action.sort==="sortLowToHigh"){

    
                let arr=array.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                     state.filterData=array
                     console.log(array)
                     array=arr
            }
           
           


            return {...state,filterData:array}
        }

        case"sortHighToLow":{
            const arr=state.filterData
            console.log(typeof arr)

            let array=arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                 state.filterData=array
                 console.log(array)

                 return {...state}
        }
        case"sortLowToHigh":{
            const arr=state.filterData
            let array=arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                 state.filterData=array
                 return {...state}
        }
        default:
            return state
    }
}

export default setProduct