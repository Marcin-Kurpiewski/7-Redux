import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMET';
const REMOVE_COMMENT = 'REMOVE_COMMET';
const THUMB_UP = 'THUMB_UP';
const THUMB_DOWN = 'THUMB_DOWN';


function addComment(text){
    return{
        type: ADD_COMMENT,
        text: 'New comment !',
        id: uuid.v4()
    }
}

function editComment(text, id){
    return{
        type: EDIT_COMMENT,
        text: 'New text in comment',
        id:uuid.v4()
    }
}

function removeComment(id){
    return {
        type:REMOVE_COMMENT,
        id:uuid.v4()
    }
}

function thumbUp(id){
    return{
        type:THUMB_UP,
        id:uuid.v4(),

    }
}

function thumbDown(id){
    return{
        type:THUMB_DOWN,
        id:uuid.v4(),

    }
}

export const ADD_COMMENT= 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMET';
export const REMOVE_COMMENT = 'REMOVE_COMMET';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';
