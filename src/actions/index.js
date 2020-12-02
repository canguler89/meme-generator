export const RECEIVE_MEMES = "RECEIVE_MEMES";

function receiveMemes(json){
    const { memes } = json.data;

    return {
        type: RECEIVE_MEMES,
        memes
    }
}