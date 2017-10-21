import {combineReducers} from 'redux'
import authReducer, {moduleName as authModule} from '../ducks/auth'
import peopleReducer, {moduleName as peopleModule} from '../ducks/people'
import eventsReducer, {moduleName as eventsModule} from '../ducks/events'

export default combineReducers({
    router, form,
    [authModule]: authReducer,
    [peopleModule]: peopleReducer,
    [eventsModule]: eventsReducer,
})