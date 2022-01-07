<template>
    <ul
        class="flex flex-wrap items-start mt-16"
    >
        <BoxProduct
            v-for="(product, index) in products"
            :key="index"
            :product="product"
        />
    </ul>
</template>

<script>
import request from '../mixins/request';
import BoxProduct from './BoxProduct.vue';

export default {
    components: {
        BoxProduct,
    },

    mixins: [request],

    props: {
        slug: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            products: [],
            loadingProducts: false,
        };
    },

    mounted() {
        this.getProducts();
    },

    methods: {
        async getProducts() {
            const cachedProducts = JSON.parse(localStorage.getItem('products'));

            if (cachedProducts) {
                this.products = cachedProducts;
                return;
            }

            this.loadingProducts = true;

            let URL = 'products';

            if (this.$route.params.slug) {
                URL += `/category/${this.$route.params.slug}`;
            }

            try {
                const { data } = await this.request().get(URL);
                this.products = data;

                localStorage.setItem('products', JSON.stringify(data));
            } catch (error) {
                console.error(error);
            } finally {
                this.loadingProducts = false;
            }
        },
    },
};
</script>
