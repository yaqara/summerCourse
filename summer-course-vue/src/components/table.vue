<template>
    <div>
        <table>
            <tr v-for="num in mult" :key="num">
                <th v-if="number">
                    {{ number }} * {{ num }} = {{ num *  number}}
                </th>
            </tr>
        </table>
    </div>
</template>

<script>


export default {
    name: "table-component",
    props: {
        number: Number
    },
    data() {
        return {       
            mult: [1,2,3,4,5,6,7,8,9,10]
        }
    }
}

</script>

<style scoped>

</style>