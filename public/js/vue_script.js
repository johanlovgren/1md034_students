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
            
            ++this.numberOfOrders;
            this.showOrder = true;
            socket.emit('addOrder',{
                
                orderId: this.getNext(),
                details: {
                    x: this.order.details.x,
                    y: this.order.details.y
                },
                orderItems: this.checkedBurgers,
                orderInformation: [this.fullname, this.email, this.recipient, this.gender]
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
