import * as ACTIONS from "../actions/SelectorActions";

const defaultSelectorState = {
    instructor: "All"
}

const SelectorReducer = (state=defaultSelectorState, action) => {
    switch(action.type) {
        case ACTIONS.SELECT_INSTRUCTOR:
            return {...state, instructor: action.instructor };
        default:
            return {...state};
    }
}

export default SelectorReducer;