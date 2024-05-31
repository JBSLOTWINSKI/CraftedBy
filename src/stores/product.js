import { defineStore } from 'pinia';

/**
 * Store for managing product data, cart, and related operations.
 */
export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        selectedProduct: null,
        cart: [],
        promoCode: '',
        currentStep: 1,
    }),

    actions: {
        /**
         * Fetches all products from the API and updates the products state.
         */
        async fetchProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                this.products = await response.json();
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },

        /**
         * Fetches a single product by its ID from the API and updates the selectedProduct state.
         * @param {number} id - The ID of the product to fetch.
         */
        async fetchProductById(id) {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                this.selectedProduct = await response.json();
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        },

        /**
         * Adds a product to the cart. If the product already exists in the cart, increases its quantity.
         * @param {Object} product - The product to add to the cart.
         */
        addToCart(product) {
            const item = this.cart.find(item => item.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        },

        /**
         * Removes a product from the cart by its ID.
         * @param {number} productId - The ID of the product to remove.
         */
        removeFromCart(productId) {
            const index = this.cart.findIndex(item => item.id === productId);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },

        /**
         * Clears all items from the cart.
         */
        clearCart() {
            this.cart = [];
        },

        /**
         * Applies a promotional code to the cart.
         * @param {string} code - The promotional code to apply.
         */
        applyPromoCode(code) {
            this.promoCode = code;
        },

        /**
         * Sets the current step of the checkout process.
         * @param {number} step - The step number to set.
         */
        setCurrentStep(step) {
            this.currentStep = step;
        },
    },

    getters: {
        /**
         * Calculates the total price of all items in the cart.
         * @param {Object} state - The current state of the store.
         * @returns {T} The total price of the cart items.
         */
        totalPrice: (state) => {
            return state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
    },
    persist: true,
});