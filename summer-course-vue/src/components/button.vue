<template>
  <button class="table_btn" @click="onClick(index)">
    {{ num }} * {{ mult }} = {{ num * mult }}
  </button>
</template>

<script>

export default {
    name: "Magic-button",
    props: {
        num: Number,
        mult: Number,
        index: Number,
        onClick: Function
    }
}

</script>

<style scoped>
    .table_btn {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        padding: 0;
        text-align: left;
    }
</style>