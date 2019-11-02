import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const ViewSelected = ({instructor}) => {
    return (
        <div>
            <h1>{instructor}</h1>
        </div>
    )
}

export default connect(
    (state) => ({
        instructor: state.SelectorReducer.instructor
    }),
    (dispatch) => ({}) 
)(ViewSelected);