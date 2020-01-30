function menuItem(name, kcal, desc1, desc2, image){
    this.name = name;
    this.kcal = kcal;
    this.desc1 = desc1;
    this.desc1 = desc2;
    this.image = image;
    this.getName = function(){
        return this.name + ' ' + this.kcal;
    };
}

let b1 = new menuItem('Burger1', '750 kCal', 'Super tasty', 'Contains dead animals', 'https://cdn-rdb.arla.com/Files/arla-se/1361781217/43b7c050-b61b-4baa-8eb6-5a8ebb896bc4.jpg?crop=(104,0,-152,0)&w=479&h=335&ak=f525e733&hm=72b785fb');
let b2 = new menuItem('Burger2', '1750 kCal', 'Super super tasty', 'Also contains dead animals', 'https://www.halsanskok.se//sites/default/files/2019-06/190227_GG_Care2share_Incredible%20Burger.jpg');
let b3 = new menuItem('Burger3', '11750 kCal', 'Super tasty', 'Contains dead animals', 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/05/veggie-burger-recipe-5.jpg');
let b4 = new menuItem('Burger4', '111750 kCal', 'Super tasty', 'Contains dead animals', 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/05/veggie-burger-recipe-5.jpg');
let b5 = new menuItem('Burger5', '750 kCal', 'Super tasty', 'Contains dead animals', 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/05/veggie-burger-recipe-5.jpg');

console.log( b1.getName() );
console.log( b2.getName() );
console.log( b3.getName() );
console.log( b4.getName() );
console.log( b5.getName() );
