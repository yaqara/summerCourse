<template>
    <div>
        <button @click="increment()">Инкремент</button>
        <button @click="mult = [1,2,3,4,5,6,7,8,9,10]">Сброс</button>
        <table v-if="inpNum">
            <tr v-for="(m, index) in mult" :key="index">
                <th>
                    <MagicButton :onClick="onClick" :num="inpNum" :mult="m" :index="index"/>
                </th>
            </tr>
        </table>
    </div>
</template>

<script>

import MagicButton from "@/components/button.vue"

export default {
    name: "table-component",
    components: {
        MagicButton
    },
    props: {
        inpNum: Number
    },
    data() {
        return {       
            mult: [1,2,3,4,5,6,7,8,9,10]
        }
    },
    methods: {
        onClick(index) {
            const newValues = [...this.mult];
            for (let i = index; i < newValues.length; i++) {
                newValues[i]++;
            }
            this.mult = newValues;
        },
        increment() {
            for (let i = 0; i < 10; i++) {
                this.mult[i]++;
            }
        }
    }
}

</script>

<style scoped>
    th {
        border: 1px solid black;
    }
</style>