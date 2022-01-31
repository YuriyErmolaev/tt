export const storage_serve = {
    setStorageBase(): void
    {
        localStorage.setItem('user', JSON.stringify({
            name: 'Emily Clark',
            avatarUrl: '/img/avatar.png'
        }));
        localStorage.setItem('favoritesAmount', '3');        
    }
}