import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        selectedProduct: null,
        cart: [],
        promoCode: '',
        currentStep: 1,
    }),
    actions: {
        async fetchProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                this.products = await response.json();
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async fetchProductById(id) {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                this.selectedProduct = await response.json();
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        },
        addToCart(product) {
            const item = this.cart.find(item => item.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(productId) {
            const index = this.cart.findIndex(item => item.id === productId);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },
        clearCart() {
            this.cart = [];
        },
        applyPromoCode(code) {
            this.promoCode = code;
        },
        setCurrentStep(step) {
            this.currentStep = step;
        },
    },
    getters: {
        totalPrice: (state) => {
            return state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
    },
    persist: true,
});
