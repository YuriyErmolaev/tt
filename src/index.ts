import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { user_fns } from './user_fncs.js'
import {storage_serve} from './storage_serve.js'
import { SearchFormData } from './SearchFormData.js'
import { find_offers } from './find_offers.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  
  storage_serve.setStorageBase();
  
  interface User {
    name: string,
    avatarUrl: string
  }
  
  type Types = "string" | "number" | "boolean";  
  const asUser = (data: unknown): User => {    
    const keyValidators: Record<keyof User, Types> = {
      name: "string",
      avatarUrl: "string"
    }
    if (typeof data === 'object' && data !== null) {
      let maybeUser = data as User
      
      for (const key of Object.keys(keyValidators) as Array<keyof User>) {
        if (typeof maybeUser[key] !== keyValidators[key]) {
          throw new Error('data is not an User');
        }
      }
      return maybeUser;
    }
    throw new Error('data is not an User');  
  }  
  
  let gettedUser: unknown = user_fns.getUserData(),
      user = asUser(gettedUser);

  let favoritesAmount = +user_fns.getFavoritesAmount();
  
  user_fns.renderUserBlock( user.name, user.avatarUrl, favoritesAmount )
  renderSearchFormBlock()
  renderSearchStubBlock()

  let submitButton = document.querySelector("#submitButton") as HTMLElement;

  submitButton.addEventListener("click", function(e){    
    let city = (document.getElementById('city') as HTMLInputElement).value,
      dateIn = (document.getElementById('check-in-date') as HTMLInputElement).value,
      dateOut = (document.getElementById('check-out-date') as HTMLInputElement).value,
      maxPrice = (document.getElementById('max-price') as HTMLInputElement).value;
    const sFormVal: SearchFormData = {
      city: city,
      dateIn: dateIn,
      dateOut: dateOut,
      maxPrice: +maxPrice
    }    
    find_offers(sFormVal);
    e.preventDefault();
  });

  // renderToast(
  //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //   {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )
})
