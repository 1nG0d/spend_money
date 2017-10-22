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


export function editorSpendEditRow(id) {
    return {
        type: EDITOR_SPEND_EDIT_ROW,
        payload: {
            id: id
        }
    }
}

export function editorSpendDeleteRow(id) {
    return {
        type: EDITOR_SPEND_DELETE_ROW,
        payload: {
            id: id
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

        default:
            return editorsState
    }
}







