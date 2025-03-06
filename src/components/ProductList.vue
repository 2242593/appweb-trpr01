<script setup lang="ts">
import type { Product } from "../scripts/product.ts"
import ProductItem from "./ProductItem.vue";

defineProps<{ 
    products: Product[] 
}>()

</script>
<template>
    <div class="list-group">
		<ProductItem class="list-group-item"
			v-for="product in products"
			:product="product"
        />
	</div>
</template>