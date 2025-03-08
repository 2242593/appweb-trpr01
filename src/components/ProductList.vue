<script setup lang="ts">
import type { Product } from "../scripts/product.ts"
import ProductItem from "./ProductItem.vue";

defineProps<{ 
    products: Product[] 
}>()

const emit = defineEmits(['updateProduct'])

const updateProduct = (id: number) => {
	emit('updateProduct', id)
};

</script>
<template>
    <div class="container text-center">
		<div class="row border border-black rounded">
			<ProductItem v-for="product in products" @updateProduct="updateProduct" :product="product" />
		</div>
	</div>
</template>