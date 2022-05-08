import {v4} from 'uuid';
const initState = 
{
    reload:false,
    data:[
        {
            id:v4(),
            name:'ahsan',
            favorite:['criket','hockey','football']
        },
        {
            id:v4(),
            name:'zubair',
            favorite:['criket','hockey','football']
        },
        {
            id:v4(),
            name:'Umair',
            favorite:['criket','hockey','football']
        },
        {
            id:v4(),
            name:'Naeem',
            favorite:['criket','hockey','football']
        },
    ]
}

const todoReducer = (state= initState, action ) =>
{
    let {
        type,
        payload
    }=action;

    switch(type){
        
        case 'getData':
            return state;
        case 'removeData':
            return {
                ...state,
                ...state.data.filter((item)=> item.id !== payload.id)
            }    
        default:
            return state;    
        }

}


export default todoReducer;