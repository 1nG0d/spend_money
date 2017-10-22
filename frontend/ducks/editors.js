import {appName} from '../config'
import {fixtures} from '../fixtures'
import {arrToMap} from '../utils'

/**
 * Constants
 * */
export const moduleName = 'editors'
const prefix = `${appName}/${moduleName}`

export const EDITOR_SPEND_EDIT_ROW = `${prefix}/EDITOR_SPEND_EDIT_ROW`
export const EDITOR_SPEND_DELETE_ROW = `${prefix}/EDITOR_SPEND_DELETE_ROW`


/**
 * AC
 * */


export function editorSpendDeleteRow(id) {
    return {
        type: EDITOR_SPEND_DELETE_ROW,
        payload: {
            id: id
        }
    }
}

export function editorSpendEditRow(_id, type, amount, description, category, date) {
    return {
        type: EDITOR_SPEND_EDIT_ROW,
        payload: {
            _id: _id,
            type: type,
            amount: amount,
            description: description,
            category: category,
            date: date

        }
    }
}


/**
 * Reducer
 * */
export default function reducer(editorsState = arrToMap(fixtures), action) {
    const {type, payload} = action;

    switch (type) {

        case EDITOR_SPEND_DELETE_ROW:
            const tmpState = {...editorsState}
            delete tmpState[payload.id]
            return tmpState

        case EDITOR_SPEND_EDIT_ROW:
            return {
                ...editorsState,
                [payload._id]: payload
            }

        default:
            return editorsState
    }
}







