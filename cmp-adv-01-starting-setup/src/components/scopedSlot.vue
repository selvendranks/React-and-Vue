<template>
    <ul>
        <li v-for="goal of goals" :key="goal">
            <slot :item="goal" otherItem="mitsuri"></slot>
        </li>
    </ul>
</template>


<script>
export default {
    data(){
        return{
          goals:['trader','programmer','gentle-men']  
        }
    }
}
</script>