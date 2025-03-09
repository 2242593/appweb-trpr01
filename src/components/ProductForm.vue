<script setup lang="ts">
import type { Product } from "../scripts/product.ts"
import "../scripts/validation.ts"
import { validateName, validateNumber } from "../scripts/validation.ts"

const emit = defineEmits(['addProduct'])

const newProduct: Product = {
    id: 1,
    name: '',
    description: '',
    price: 0,
    stock: 0
}

const validateForm = () => {
    if (validateName(newProduct.name) && validateNumber(newProduct.price) && validateNumber(newProduct.stock)) {
        emit('addProduct', newProduct)
    }
}

</script>
<template>
    <form>
        <div class="mb-3">
            <label class="form-label">Nom du produit</label>
            <input type="text" 
                @input="newProduct.name = ($event.target as HTMLInputElement).value" 
                class="form-control">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea @input="newProduct.description = ($event.target as HTMLInputElement).value" id="description" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Prix</label>
            <input type="number" 
                @input="newProduct.price = parseFloat(($event.target as HTMLInputElement).value)"
                id="price"
                class="form-control">
        </div>
        <div class="mb-3">
            <label for="stock" class="form-label">Stock</label>
            <input type="number" 
                @input="newProduct.stock = parseInt(($event.target as HTMLInputElement).value)" 
                id="stock"
                class="form-control">
        </div>
        <button type="button" class="btn btn-primary" @click="validateForm">Ajouter</button>
    </form>
</template>