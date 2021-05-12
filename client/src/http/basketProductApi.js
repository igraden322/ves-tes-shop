import { $authHost, $host } from './index'

export const addRecord = async (record) => {
    const { data } = await $authHost.post('api/basketProduct/add', record);
    return data;
}

export const getRecords = async (basketId) => {
    const { data } = await $authHost.get('api/basketProduct/getAll', { params: { basketId } });
    return data;
}

export const getRecord = async (basketId) => {
    const { data } = await $authHost.get('api/product/', { params: { basketId } });
    return data;
}

export const deleteRecord = async (basketId) => {
    const { data } = await $authHost.post('api/basketProduct/delete' + basketId, basketId);
    return data;
}
