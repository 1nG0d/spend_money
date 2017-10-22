import {appName} from '../config'
import {fixtures} from '../fixtures'

/**
 * Constants
 * */
export const moduleName = 'editors'
const prefix = `${appName}/${moduleName}`

export const EDIT_ROW_SPEND = `${prefix}/EDIT_ROW_SPEND`


/**
 * AC
 * */


export function editRowSpend(id) {
    return {
        type: EDIT_ROW_SPEND,
        payload: {
            id: id
        }
    }
}


/**
 * Reducer
 * */
export default function reducer(state = fixtures, action) {
    const {type, payload} = action;

    switch (type) {

        default:
            return state
    }
}







