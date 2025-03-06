<script setup lang="ts">
import type { Product } from "../scripts/product.ts"
import ProductForm from './ProductForm.vue';
import ProductList from "./ProductList.vue";
import { ref } from "vue"

const products = ref<Product[]>([
    {
        id: 1,
        name: '',
        description: '',
        price: 0,
        stock: 0
    }
])

const addProduct = (product: Product) => {
    product.id = products.value.length + 1
    products.value.push(product)
}

</script>

<template>
    <div class="container-fluid row">
        <ProductList class="col" :products="products"/>
        <ProductForm class="col" @addProduct="addProduct"/>
    </div>
</template>