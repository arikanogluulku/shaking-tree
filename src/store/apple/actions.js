import {SET_APPLE_DROP,SET_BASKET,SET_APPLES,RESTART} from "./types"
const setAppleDrop =(payload) =>({
  
    type:SET_APPLE_DROP,
    payload
});

const setBasket=(payload) =>({
    type:SET_BASKET,
    payload
});
const setApples=(payload) =>({
    type:SET_APPLES,
    payload
});
const restart = () =>({
    type:RESTART,
})
export {setAppleDrop,setBasket,setApples,restart};