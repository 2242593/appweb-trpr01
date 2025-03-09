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

//Section de modification d'un produit
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
		if(product.name.length > 0) productToUpdate.name = product.name;
		if(product.description.length > 0) productToUpdate.description = product.description;
		if(product.price > 0) productToUpdate.price = product.price;
        if(product.stock >= 0) productToUpdate.stock = product.stock;

        const id: number = productToUpdate.id
        products.value.splice(id - 1, 1, productToUpdate);
	}
}

//Dupliquer un produit
const duplicateProduct = (id: number) => {
    const product = products.value.find((product) => product.id === id);
    if (product){
        const newProduct: Product = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        }
        addProduct(newProduct);
    }
};

//Ajouter un produit
const addProduct = (product: Product) => {
    if(products.value.length === 1) product.id = products.value.length + 1;
    else product.id = product.id + 1
    products.value.push(product)
};

const deleteProduct = (id: number) => {
    if(products.value.length > 1) {
        products.value = products.value.filter((product) => product.id !== id)
    };
}

</script>

<template>
    <div class="row">
        <ProductList class="col-6" 
            :products="products" 
            @update="startEdit"
            @duplicate="duplicateProduct"
            @delete="deleteProduct"/>
        <ProductForm class="col-3" 
            @addProduct="addProduct"/>
        <UpdateProductForm class="col-3" 
            :name="editProductName" 
            :description="editProductDescription" 
            :price="editProductPrice" 
            :stock="editProductStock"
            @update="editProduct"/>
    </div>
</template>