<template>
    <h1>
        Wepaons from warframe:
    </h1>
    <button @click="weapons()">Test</button>
</template>
<script setup lang="ts">
import { arrayExpression, type classExpression } from '@babel/types';
import type { Axios, AxiosResponse } from 'axios';
import {inject, onMounted} from 'vue'

import type {Weapon} from '@/classses/Weapon'

const axios : any = inject('axios')

var Weapons : Record<string,Weapon[]> = {}
const weapons = () => {
    axios.get("https://api.warframestat.us/weapons").then( (response : { data: Weapon[] }) => {
        let categories : Array<string> = ["Arch-Gun","Arch-Melee","Melee", "Primary","Secondary"]
        let tmp : Weapon[]
        tmp = response.data.sort((a: Weapon, b: Weapon) => {
            if(a.category === b.category){
                return 0;
            }
            return a.category < b.category ? -1 : 1
        })
        let first = 0
        let last = 0
        let category: string = "Arch-Gun"
        
        tmp.forEach(element => {
            if(element.category != category){
                Weapons[category] = tmp.splice(first, last)
                category = element.category
                first = last + 1
            }
            last++

        });
        //tmp = response.data.splice(0, 12 )
        console.log(Weapons)
    })
    
}

</script>