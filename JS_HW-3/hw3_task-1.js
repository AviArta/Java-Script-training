// класс для хранения данных о товаре.
class Good {
    constructor (id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }

    setAvailable () {
        if (this.available == true) {
            this.available = false;
        } else {
            this.available = true;
        }
    }
}

// класс для хранения каталога товаров.
class GoodsList {
    #goods;
    constructor (filt, sortPrice, sortDir) {
        this.#goods = [];
        this.filt = filt;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    getAllList () {
        return this.#goods;
    }

    getList () {
        let filterGoods = this.#goods.filter(good => good.available == true).filter(good => this.filt.test(good.name));
        if (this.sortPrice == true) {
            if (this.sortDir == true) {
                filterGoods.sort((g1, g2) => (g1.price <= g2.price) ? -1:1);
            } else {
                filterGoods.sort((g1, g2) => (g1.price <= g2.price) ? 1:-1);
            } 
        } 
        if (filterGoods.length > 0) {
            return filterGoods
        } else {
            return 'Товара нет в наличии.'
        }
    }

    add (good) {
        this.#goods.push(good);
    }

    remove (id) {
        let index = this.#goods.findIndex(good => good.id == id);
        this.#goods.splice(index, 1);
    }
}

// класс дочерний от Good, для хранения данных о товаре в корзине с дополнительным свойством.
class BasketGood extends Good {
    constructor (id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available);
        this.amount = amount;
    }
}

// класс для хранения данных о корзине товаров.
class Basket {
    goods;
    constructor () {
        this.goods = [];
    }

    addToBasket (basketgood) {
        this.goods.push(basketgood);
    }

    get totalAmount () {
        let totalAmount = 0;
        this.goods.forEach(function(good) {
            totalAmount += good.amount;
        });
        return totalAmount
    }

    get totalSum () {
        const totalSum = this.goods.reduce((sumPrice, good) => sumPrice + good.price * good.amount, 0);
        return totalSum
        };
      
    checkInBasket(id) {
        let flag = false;
        this.goods.forEach(function(good) {
            if (id == good.id) {
                flag = true;
            }
        });
        return flag
    }
    
    add (good, amount) {
        if (this.checkInBasket(good.id)) {
            this.goods.forEach(function(entry) {
                if (good.id == entry.id) {
                    entry.amount += amount;
                }
            });
        } else {    
            const basketgood_ = new BasketGood(good, amount);
            basket.addToBasket(basketgood_);
        }
    }

    remove (good, amount) {
        if (this.checkInBasket(good.id)) {
            let flag = true;
            this.goods.forEach(function(entry) {
                //let flag = true;
                if (good.id == entry.id) {
                    entry.amount -= amount;
                    if (entry.amount <= 0) {
                        flag = false;
                    }
                }
            });
            if (flag == false) {
                let index = this.goods.findIndex(one => one.id == good.id);
                this.goods.splice(index, 1);
            }
        } else {
            return 'Такого товара нет в корзине.';
        }
    }
    clear () {
        this.goods.length = 0;
        return `Корзина очищена: ${this.goods.length} товаров.`;
    }
    removeUnavailable () {
        let filterBasket = this.goods.filter(good => good.available == true);
        console.log(filterBasket);
        return filterBasket;
    }
}

// создание экземпляров классов:
const good1 = new Good(1, 'paper', 'watercolor paper 300gr', 'A4', 700, true);
const good2 = new Good(2, 'paints', 'watercolor paints', '16', 1000, true);
const good3 = new Good(3, 'pencil', 'gray pancil', 'HB', 200, true);
const good4 = new Good(4, 'colored pencils', 'pastel colors', '32', 1200, true);
const good5 = new Good(5, 'palette', 'palette for paints', '16', 400, false);
const good6 = new Good(6, 'brush', 'artificial brush', '8', 100, true);

const goodslist = new GoodsList(/pencil/g, true, true);

const basketgood1 = new BasketGood(2, 'paints', 'watercolor paints', '16', 1000, true, 4);
const basketgood2 = new BasketGood(6, 'brush', 'artificial brush', '8', 100, true, 10);
const basketgood3 = new BasketGood(5, 'palette', 'palette for paints', '16', 400, false, 10);
const basketgood4 = new BasketGood(1, 'paper', 'watercolor paper 300gr', 'A4', 700, true, 1);

const basket = new Basket();


// блок выполнения кода

//console.log(good6);
good2.setAvailable();
//console.log(good2);
goodslist.add(good1);
goodslist.add(good2);
goodslist.add(good3);
goodslist.add(good4);
goodslist.add(good5);
goodslist.add(good6);
//console.log('Список всех товаров в каталоге:')
//goodslist.getAllList();

//console.log('Список всех товаров после удаления первого:')
goodslist.remove(1);
//goodslist.getAllList();

console.log('Список товаров, которые доступны для продажи, отфильтрованы по рег.выражению и сортированы по цене:')
console.log(goodslist.getList());
console.log('--------------------');

//console.log('Созданы товары с указанием количества.')
//console.log(basketgood1, basketgood2);

basket.addToBasket(basketgood1);
basket.addToBasket(basketgood2);
basket.addToBasket(basketgood3);
//console.log('Корзина:');
//console.log(basket.goods);
console.log(`Всего товаров в корзине: ${basket.totalAmount} товаров.`);
console.log(`В корзине товаров на сумму: ${basket.totalSum} руб.`);
console.log('--------------------');

console.log('Корзина после добавления нового товара:')
basket.addToBasket(basketgood4);
console.log(basket);
console.log('--------------------');

console.log('Корзина после добавления товара, который уже в корзине:')
basket.add(good1, 6);
console.log(basket);
console.log('--------------------');

console.log('Корзина после удаления части товара:')
basket.remove(good1, 4);
console.log(basket);
console.log('--------------------');

console.log('Корзина после полного удаления товара:')
basket.remove(good1, 4);
console.log(basket);
basket.remove(good3, 1);  // данного товара нет в корзине
console.log('--------------------');

console.log('Корзина только с доступными товарами:')
basket.removeUnavailable();
console.log('--------------------');

console.log(basket.clear());
console.log(basket);