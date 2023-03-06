let goodCatalog = [];
let basket = [];
let totalBasket = [];

function makeGood (id, name, description, sizes, price, available) {
    return {
        id: id,
        name: name,
        description: description,
        sizes: sizes,
        price: price,
        available: available,
    };
}

function addToCatalog (good) {
    goodCatalog.push(good);
    return 
}

function checkInCatalog(name) {
    let flag = false;
    goodCatalog.forEach(function(entry) {
        if (name === entry.name) {
            flag = true;
        }
    });
    return flag
}


function checkInBasket(name) {
    let flag = false;
    basket.forEach(function(entry) {
        if (name === entry.name) {
            flag = true;
        }
    });
    return flag
}

function changeTotalAmount (userGood, amount) {
    if (checkInBasket(userGood, amount)) {
        basket.forEach(function(entry) {
            if (userGood === entry.name) {
                let newAmount = amount + entry.amount;
                return newAmount
            }
        });
    }
}

function addToBasket (userGood, amount) {
    if (checkInCatalog(userGood) & !checkInBasket(userGood)) {
        let good = {name: userGood, amount: amount};
        basket.push(good);
        console.log(`Товар ${userGood} добавлен в корзину в количестве ${amount} шт.`);
        return console.log('Корзина:', basket)
    } else if (checkInCatalog(userGood) & checkInBasket(userGood)) {
        let newAmount = changeTotalAmount(userGood, amount);
        basket.forEach(function(entry) {
            if (userGood === entry.name) {
                let newAmount = amount + entry.amount;
                entry.amount = newAmount;
                console.log(`Количество ${amount} шт. товара ${userGood} добавлено в корзину.`);
                return console.log('Корзина:', basket)
            }
        });
    } else {
        console.log(`Товара ${userGood} нет в каталоге товаров.`)
    }
}

function removeGoodFromBasket (userGood) {
    let indexGood = NaN;
    counter = -1;
    basket.forEach(function(entry) {
        counter++;
        if (userGood === entry.name) {
            indexGood = counter;
            basket.splice(indexGood, 1);
            console.log(`Товар ${userGood} удалён из корзины.`);
            return console.log(basket)
        }
    }); 
}

function totalInfo () {
    let totalAmount = 0;
    let totalSumm = 0;
    basket.forEach(function(entry1) {
        totalAmount += entry1.amount;
        goodCatalog.forEach(function(entry2) {
            if (entry1.name == entry2.name) {
                totalSumm += (entry2.price * entry1.amount);
            }
        });
    });
    totalBasket = {totalAmount: totalAmount, totalSumm: totalSumm};
    console.log(`Общее количество товаров в корзине: ${totalAmount}
     общей стоимостью ${totalSumm} руб.`);
    return console.log(totalBasket)
}

function cleanBasket () {
    basket.length = 0;
    console.log(basket);
    return console.log('Корзина очищена.')
}

// блок создания элементов
let good1 = makeGood(001, 'dress', 'office dress', 36, 3000, true,);
addToCatalog(good1);
let good2 = makeGood(002, 'blouse', 'office blouse', 36, 2000, true,);
addToCatalog(good2);
let good3 = makeGood(003, 'shorts', 'leather shorts', 40, 3800, true,);
addToCatalog(good3);
let good4 = makeGood(004, 'jacket', 'jean jacket', 34, 4000, false,);
addToCatalog(good4);
let good5 = makeGood(005, 'jeans', 'skinny jeans', 40, 5000, true,);
addToCatalog(good5);

//блок выполнения кода
addToBasket('dress', 1);
addToBasket('jeans', 1);
addToBasket('dress', 6);
addToBasket('coat', 1); //несуществующий товар

removeGoodFromBasket('jeans');
totalInfo();
cleanBasket();