export const setUserData = (token: string, data: any) => {
    localStorage.setItem(token, JSON.stringify(data));
};

export const getUserData = (token: string) => {
    const data = localStorage.getItem(token);
    return data;
};
