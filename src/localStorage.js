//Obter dados localStorage
export const getLocalStorage = () => {
    let storedUser = localStorage.getItem("userData");
    if (storedUser) {
        let data = JSON.parse(storedUser);
        return data;
    }
    return undefined;
}

// Adicionar dados localStorage
export const addLocalStorage = (res) => {
    localStorage.setItem('userData', JSON.stringify(res));
}

// Remover dados localStorage
export const clearStorage = () => {
    localStorage.removeItem("userData");
}