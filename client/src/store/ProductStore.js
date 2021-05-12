import { makeAutoObservable } from 'mobx'

export default class ProductStore {
    constructor() {
        this._categories = []
        this._types = []
        this._products = []
        this._selectedType = []
        this._selectedCategory = []
        this._totalCount = 0
        this._limit = 2
        this._page = 1
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }

    setTypes(types) {
        this._types = types
    }

    setProducts(products) {
        this._products = products
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedCategory(category) {
        this.setPage(1)
        this._selectedCategory = category
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }
    
    get categories() {
        return this._categories
    }

    get types() {
        return this._types
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

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }

}