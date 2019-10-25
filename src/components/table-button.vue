<template>
    <button class="table-button">{{ buttonName }}</button>
</template>
<script>
export default {
    props: {
        buttonName: String
    }
}
</script>

<style>
button.table-button {
    width: 120px;
    height: 40px;
    background-color: #204578;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid #eee;
    border-radius: 5px;
    float: right;
    margin-top: 20px;
}
</style>