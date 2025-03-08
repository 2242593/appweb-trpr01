<script setup lang="ts">
import type { Product } from "../scripts/product.ts"
import ProductForm from './ProductForm.vue';
import ProductList from "./ProductList.vue";
import UpdateProductForm from "./UpdateProductForm.vue";
import { ref } from "vue"

const products = ref<Product[]>([
    {
        id: 1,
        name: 'product-name',
        description: 'product-description',
        price: 12,
        stock: 12
    }
]);

const selectedProductId = ref<number>(0)
const editProductName = ref<string>("");
const editProductDescription = ref<string>("");
const editProductPrice = ref<number>(0);
const editProductStock = ref<number>(0);

const startEdit = (id: number) => {
	const product = products.value.find((product) => product.id === id);
    if(product){
        selectedProductId.value = id;
        editProductName.value = product.name;
        editProductDescription.value = product.description;
        editProductPrice.value = product.price;
        editProductStock.value = product.stock;
    }
}

const editProduct = (product: Product) => {
    if(!editProductName.value.trim()) return;
	const productToUpdate = products.value.find((product) => product.id === selectedProductId.value);
	if (productToUpdate) {
        //update
		if(product.name.length > 0) productToUpdate.name = product.name;
		if(product.description.length > 0) productToUpdate.description = product.description;
		if(product.price > 0) productToUpdate.price = product.price;
        if(product.stock > 0) productToUpdate.stock = product.stock;

        const id: number = productToUpdate.id
        products.value.splice(id - 1, 1, productToUpdate);
	}
}

const addProduct = (product: Product) => {
    product.id = products.value.length + 1
    products.value.push(product)
};

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <ProductList class="col-4" :products="products" @updateProduct="startEdit"/>
            <ProductForm class="col-4" @addProduct="addProduct"/>
            <UpdateProductForm class="col-4" 
                :name="editProductName" 
                :description="editProductDescription" 
                :price="editProductPrice" 
                :stock="editProductStock"
                @updateProduct="editProduct"
            />
        </div>
    </div>
</template>