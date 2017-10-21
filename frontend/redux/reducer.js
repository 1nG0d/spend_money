import {combineReducers} from 'redux'
import editorReducer, {moduleName as editorModule} from '../ducks/editors'

export default combineReducers({
    [editorModule]: editorReducer
})