<template>
    <div>
        <error-alert v-if="error.iserror === true" >
            <template #default>
                <h2>{{error.errordesc}}</h2>
                <button @click="confirmError()">Okay</button>
            </template>
        </error-alert>
        <h2>component1</h2>
        <label for="goalinput">Goal</label>
        <input type="text" ref="goal" id="goalinput">
        <button @click="addGoal()">Submit</button>
    </div>
</template>

<script>
import errorAlert from './ErrorAlert.vue';
export default {
    components:{
        'error-alert':errorAlert
    },
    data(){
        return{
            error:{
                iserror:false,
                errordesc:''
            }
        }
    },
    methods:{
        addGoal(){
            if(this.$refs.goal.value === ''){
                this.error.iserror = true
                this.error.errordesc = 'empty input field'
            }
        }
        ,
        confirmError(){
            this.error.iserror = false;
        }
    }
}
</script>