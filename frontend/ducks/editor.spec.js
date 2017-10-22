import editorReducer, {
    editorSpendEditRow,
    editorSpendDeleteRow,
    EDITOR_SPEND_EDIT_ROW,
    EDITOR_SPEND_DELETE_ROW
} from './editors'
import {fixtures} from '../fixtures'
import {arrToMap} from '../utils'


describe('editor page test',() =>{

    it('should handle initial state', ()=>{
        expect(
            editorReducer(undefined, {})
        ).toEqual(arrToMap(fixtures))

    });

    it('should delete object through id', ()=>{
        let id = fixtures[0]._id;
        const result = editorReducer(arrToMap(fixtures), editorSpendDeleteRow(id));
        expect(
            result[id]
        ).toEqual(undefined)
    })


});
