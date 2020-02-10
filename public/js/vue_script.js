'use strict';
const socket = io();

const form = new Vue({
    el: "#site",
    data: {
        food: food,
        fullname: "",
        email: "",
        recipient: "",
        gender: "",      
        showOrder: false,
        checkedBurgers: [],
        orders: {},
        order: {
            visible: false,
            details: {
                x: 0, y: 0
            },
        },
        numberOfOrders: 0,
    },
    methods: {
        getNext: function() {

            return this.numberOfOrders;
        },
        addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            
            ++this.numberOfOrders;
            socket.emit('addOrder',{
                
                orderId: this.getNext(),
                details: {
                    x: this.order.details.x,
                    y: this.order.details.y
                },
                orderItems: this.checkedBurgers,
            });
            console.log({
                
                orderId: this.getNext(),
                details: {
                    x: this.order.details.x,
                    y: this.order.details.y
                },
                orderItems: this.checkedBurgers,
            });
        },
        displayOrder: function(event) {

            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            this.order.details.x = event.clientX - 10 - offset.x;
            this.order.details.y = event.clientY - 10 - offset.y;
            this.order.visible = true;
        },
    },
})
