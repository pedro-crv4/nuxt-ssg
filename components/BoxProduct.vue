<template>
    <li class="box-product flex-grow-0 flex-shrink w-1/4">
        <NuxtLink
            class="block"
            :to="{name: 'products-id', params: { id: product.id }}"
        >
            <div
                class="mb-12 flex-grow-1"
                outlined
            >
                <img
                    class="h-64"
                    :src="product.image"
                />

                <p class="blue-grey--text text--darken-1">{{ product.title }}</p>

                <div>
                    <p class="my-2 text-h6 font-weight-bold">
                        {{ convertToCurrency(product.price) }}
                    </p>

                    <p class="text-subtitle-2 mb-0">
                        em até 12x de
                        <span class="font-weight-bold">{{ convertToCurrency(product.price/12) }}</span>
                    </p>
                </div>
            </div>
        </NuxtLink>
    </li>
</template>

<script>
import convertToCurrency from '../mixins/convertToCurrency';

export default {
    name: 'BoxProduct',

    mixins: [convertToCurrency],

    props: {
        product: {
            type: Object,
            required: true,
        },
    },
};
</script>
