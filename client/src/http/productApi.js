import { $authHost, $host } from './index'

export const createCategories = async (category) => {
    const { data } = await $authHost.post('api/category', category);
    return data;
}

export const fetchCategories = async (category) => {
    const { data } = await $host.get('api/category', category);
    return data;
}

export const createTypes = async (type) => {
    const { data } = await $authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async (type) => {
    const { data } = await $host.get('api/type', type);
    return data;
}

export const createProducts = async (product) => {
    const { data } = await $authHost.post('api/product', product);
    return data;
}

export const fetchProducts = async (typeId, categoryId, page, limit = 5) => {
    const { data } = await $host.get('api/product', {
        params: {
            typeId, categoryId, page, limit
        }
    });
    return data;
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id);
    return data;
}

