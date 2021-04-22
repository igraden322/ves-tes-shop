import { makeAutoObservable } from 'mobx'

export default class ProductStore {
    constructor() {
        this._categories = [
            { id: 1, name: 'Свитшоты' },
            { id: 2, name: 'Толстовки' }
        ]
        this._sizes = [
            { id: 1, name: 'M' },
            { id: 2, name: '48' }
        ]
        this._products = [
            { id: 1, name: "Свитшот", price: 1750, img: "../../../server/static/9c35ffcc-3f30-416e-b2f3-0c4dbad789ea.jpg" },
            { id: 2, name: "Свитшот", price: 3250, img: "../../../server/static/9c35ffcc-3f30-416e-b2f3-0c4dbad789ea.jpg" }
        ]
        this._selectedType = []
        this._selectedCategory = []
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }

    setSizes(sizes) {
        this._sizes = sizes
    }

    setProducts(products) {
        this._products = products
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    get categories() {
        return this._categories
    }

    get sizes() {
        return this._sizes
    }

    get products() {
        return this._products
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedCategory() {
        return this._selectedCategory
    }

}