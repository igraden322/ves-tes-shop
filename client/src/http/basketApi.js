import { $authHost, $host } from './index'

export const addBasket = async (userId) => {
    const { data } = await $authHost.post('api/basket/add', { userId });
    return data;
}

export const getBasket = async (userId) => {
    const { data } = await $authHost.get('api/basket/get', userId);
    return data;
}
