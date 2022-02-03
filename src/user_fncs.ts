import { renderBlock } from './lib.js'
export const user_fns = {
  getUserData(): unknown
  { 
    let user = JSON.parse( localStorage.user );   
    return user;
  },  
  getFavoritesAmount(): number
  {
    let favoritesAmount = localStorage.favoritesAmount;
    return favoritesAmount;
  },
  renderUserBlock (
      userName:string = '',
      avaLnk:string = '',
      favoriteItemsAmount:number = 0
    ) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
    const hasFavoriteItems = favoriteItemsAmount ? true : false

    renderBlock(
      'user-block',
      `
      <div class="header-container">
        <img class="avatar" src="${avaLnk}" alt="Wade Warren" />
        <div class="info">
            <p class="name">${userName}</p>
            <p class="fav">
              <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
            </p>
        </div>
      </div>
      `
    )
  }
}
