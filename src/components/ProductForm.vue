<script setup lang="ts">
import type { Product } from "../scripts/product.ts"
import { ref, defineEmits } from "vue"

const emit = defineEmits(['addProduct'])

const newProduct = ref<Product>({
    id: 1,
    name: '',
    description: '',
    price: 0,
    stock: 0
})

</script>
<template>
    <form class="needs-validation" novalidate>
        <div class="mb-3">
            <label for="name" class="form-label">Nom du produit</label>
            <input type="text" v-model="newProduct.name" id="name" class="form-control" required>
            <div class="invalid-tooltip"> 
                Entrez une description valide. 
            </div>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea v-model="newProduct.description" id="description" class="form-control"></textarea>
            <div class="invalid-tooltip"> 
                Entrez une description valide. 
            </div>
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Prix</label>
            <input type="number" v-model="newProduct.price" id="price" class="form-control">
            <div class="invalid-tooltip"> 
                Entrez un prix valide. 
            </div>
        </div>
        <div class="mb-3">
            <label for="stock" class="form-label">Stock</label>
            <input type="number" v-model="newProduct.stock" id="stock" class="form-control">
            <div class="invalid-tooltip"> 
                Entrez une quantité valide. 
            </div>
        </div>
        <button type="button" class="btn btn-primary" @click="emit('addProduct', newProduct)">Ajouter</button>
    </form>
</template>