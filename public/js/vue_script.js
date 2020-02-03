/*
const box = new Vue({
    el: '#select_burger',
    data: {
        food: food,
        checkedBurgers: []
    }
});
*/

const form = new Vue({
    el: "#site",
    data: {
        food: food,
        fullname: "",
        email: "",
        street: "",
        house: "",
        recipient: "",
        gender: "",      
        showOrder: false,
        checkedBurgers: []
    },
    methods: {
        markDone: function() {
            inputFields;
            this.showOrder = true;
        }
    }
})
