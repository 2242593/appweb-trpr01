<script setup lang="ts">
import type { Product } from '../scripts/product';


const props = defineProps<{product: Product}>()
const showDesc: boolean = false;

</script>
<template>
    <div class="row">
        <p class="col-4">nom: {{ props.product.name }}</p>
        <p class="col-4">prix: {{ props.product.price }}</p>
        <p class="col-4">quantité: {{ props.product.stock }}</p>
        <p class="col-4" v-show="showDesc">{{ props.product.description }}</p>
    </div>
</template>