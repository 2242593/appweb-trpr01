import { ref } from "vue"

export const validateName = (field: string) => {
    let isTextFieldValid = ref<boolean>(false)

    if(field.length === 0) {
        isTextFieldValid.value = false
    }else {
        isTextFieldValid.value = true
    }
    return isTextFieldValid.value
}

export const validateNumber = (number: number) => {
    let isNumberValid = ref<boolean>(false)
    if(number < 0) {
        isNumberValid.value = false
    }
    else {
        isNumberValid.value = true
    }
    return isNumberValid.value
}