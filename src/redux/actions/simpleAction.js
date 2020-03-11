import SAMPLE_ACTION from "../constants/actionTypes"


function simpleAction(dispatch) {
    dispatch({
        type: SAMPLE_ACTION,
        payload: 'restaurant'
    })
}

export default simpleAction
