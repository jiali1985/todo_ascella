const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {
                    id: action.id,
                    name: action.item.name,
                    checked: false,
                    notes: ''
                },
                ...state
            ];
        case 'REMOVE_TODO':
            return state.filter(item => item.id !== action.item.id);
        case 'UPDATE_TODO':
            return state.map(item => item.id === action.item.id ? { id: action.item.id, name: action.item.name, checked: action.item.checked, notes: action.item.notes } : item);
        case 'TOGGLE_TODO':
            return state.map(item => item.id === action.item.id ? { ...item, checked: !item.checked } : item);
        default:
            return state;
    }
}

export default reducer;