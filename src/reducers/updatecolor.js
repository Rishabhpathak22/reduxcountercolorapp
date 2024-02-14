const initialState ='white'
const updateColor=(state= initialState, action) =>{
    switch(action.type) {
        case "RED" : return 'red'
        case "GREEN" : return 'green'
        case "YELLOW" : return 'yellow'
        default : return state;
    }
}
export default updateColor;