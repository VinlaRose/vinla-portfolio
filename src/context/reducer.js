
export const initialState = {
  darkMode: false
}

export const reducer = (state, action) =>{
    switch(action.type){
        
        case 'DARK_MODE_ON':
            return{
                ...state,
                darkMode: true
                
            } 
        case 'DARK_MODE_OFF':
            return{
                ...state,
                darkMode: false
                
            }
        default:
            return state;
        
    }

}