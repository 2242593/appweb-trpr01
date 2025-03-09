<script setup lang="ts">
import type { Product } from "../scripts/product.ts"
import ProductItem from "./ProductItem.vue";

defineProps<{ 
    products: Product[] 
}>()

const emit = defineEmits(['update', 'duplicate', 'delete'])

const updateProduct = (id: number) => {
	emit('update', id)
};

const duplicateProduct = (id: number) => {
	emit('duplicate', id)
};

const deleteProduct = (id: number) => {
	emit('delete', id)
}

</script>
<template>
    <div>
		<ProductItem class="container text-center"
			v-for="product in products" 
			@update="updateProduct" 
			@duplicate="duplicateProduct"
			@delete="deleteProduct"
			:product="product" />
	</div>
</template>