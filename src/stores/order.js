import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
    state: () => ({
        order: {
            address: null,
            payment: null,
        },
    }),
    actions: {
        setAddress(address) {
            this.order.address = address;
        },
        setPayment(payment) {
            this.order.payment = payment;
        },
    },
});
