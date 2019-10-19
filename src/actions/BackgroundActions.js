import dispatch from 'redux';

export const SET_COLOR = "SET_COLOR"

export const setColor = (color) => {
    dispatch({
        type: SET_COLOR,
        color
    });
}
