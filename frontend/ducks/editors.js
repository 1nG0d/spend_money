import {appName} from '../config'
import {fixtures} from '../fixtures'

/**
 * Constants
 * */
export const moduleName = 'editors'
const prefix = `${appName}/${moduleName}`

export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`



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

