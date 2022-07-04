<template>
    <div class="row">
        <button>{{ text }}</button>
    </div>
</template>

<style scoped>
.row {
    padding: 1em 0 0 1em;
    width: 100vw;
    display: flex;
    align-items: center;
}

button {
    border: none;
    outline: none;
    border: 2px solid #bfc2ca;
    color: #bfc2ca;
    background: transparent;
    padding: 0.5em 1em;
    font-size: 1.3em;
}
</style>

<script setup lang="ts">

defineProps<{ text: string }>()

</script>
