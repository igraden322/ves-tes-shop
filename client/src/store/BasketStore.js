import {makeAutoObservable} from 'mobx'

export default class BasketStore{
    constructor() {
        this._basket = {}
        this._products = {}
        this._userId = ''
        this._productId = ''
        this._list = []
        makeAutoObservable(this)
    }

    setBasket(basket){
        this._basket = basket
    }
    

    setList(list){
        this._list = list
    }

    setProducts(products){
        this._products = products
    }

    setUserId(userId){
        this._userId = userId
    }

    setProductId(productId){
        this._productId = productId
    }

    get products(){
        return this._products
    }

    get basket() {
        return this._basket
    }

    get list() {
        return this._list
    }

    get productId(){
        return this._productId
    }

    get userId() {
        return this._userId
    }

}