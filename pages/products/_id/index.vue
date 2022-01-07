<template>
    <div class="mt-12">
        <h1 class="mb-8">{{ product.title }}</h1>
        <p class="mb-4">Product category: {{ product.category }}</p>
        <p class="mb-4">Price: {{ convertToCurrency(product.price) }}</p>
        <p class="mb-4">{{ product.description }}</p>
        <img :src="product.image" alt="">
    </div>
</template>

<script>
import convertToCurrency from '@/mixins/convertToCurrency';

export default {

    mixins: [convertToCurrency],

    async asyncData({ params, $axios }) {
        const URL = `https://fakestoreapi.com/products/${params.id}`;

        const data = await $axios.$get(URL);
        const product = data;

        return { product };
    },
}
</script>

<style>

</style>