<script setup lang="ts">
import type { Product } from '../scripts/product';

const props = defineProps<{
    product: Product
}>()

const emit = defineEmits(['updateProduct'])

const showDesc: boolean = false;

</script>
<template>
    <div class="row">
        <div class="col-3">nom: {{ props.product.name }}</div>
        <div class="col-3">prix: {{ props.product.price }}</div>
        <div class="col-3">quantité: {{ props.product.stock }}</div>
        <div class="col-3" v-show="showDesc">{{ props.product.description }}</div>
        <button type="button" class="btn btn-outline-info" @click="emit('updateProduct', product.id)">Modifier</button>
    </div>
</template>