import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {selectInstructor} from '../actions/SelectorActions';

const Selector = ({instructor, selectInstructor}) => {

    return (
        <div>
            <select value={instructor} onChange={(e) => selectInstructor(e.target.value)}>
                <option value="All">All</option>
                <option value="Swarat">Swarat</option>
                <option value="Rixner">Rixner</option>
            </select>
        </div>
    )
}

export default connect(
    (state) => ({
        instructor: state.SelectorReducer.instructor
    }),
    (dispatch) => ({
        selectInstructor: (instructor) => dispatch(selectInstructor(instructor))
    }) 
)(Selector);