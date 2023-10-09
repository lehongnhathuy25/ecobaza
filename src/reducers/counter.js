import setLocalStorage from '~/LocalStorage/setLocalStorage'
import getLocalStorage from '~/LocalStorage/getLocalStorage'
import UpdateUserAPI from '~/Api/UpdateUserAPI'
const card = getLocalStorage('card')
const cardUser = JSON.parse(card)
export const counterReducer = (state=cardUser || [], action) => {
  let formData = {}
  let url = ''
    switch (action.type) {
      case "INCREMENT":
        const newCard = [...state,action.payload]
         setLocalStorage('card',JSON.stringify(newCard)) 
         formData ={
          card:newCard
         }
         url =`user/${action.ID}`
         UpdateUserAPI(formData,url)
        return newCard 
      case "DECREMENT":
         const removeCard = [...state]
         removeCard.splice(action.key,1)
         formData ={
          card:removeCard
         }
         url =`user/${action.ID}`
         UpdateUserAPI(formData,url)
         setLocalStorage('card',JSON.stringify(removeCard))
        return removeCard
      default:
        return state;
    }
  };
export default counterReducer;

