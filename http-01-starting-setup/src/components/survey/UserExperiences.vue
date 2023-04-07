<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadResults()"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isError === true">Error has occured in fetching!!!!</p>
      <div v-else-if="isloading === true">
        <p>Loading .....</p>
      </div>
      <p v-else-if="!isloading && (!results || results.length == 0)">
        No stored Experiences
      </p>
      <ul v-else-if="!isloading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.name"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isloading: false,
      isError: false,
    };
  },
  methods: {
    async loadResults() {
      try{
      this.isloading = true;

      let response = await fetch(
        'https://vue-http-43048-default-rtdb.firebaseio.com/survey.json'
      ).catch(()=>console.log("Error has occured"))

      console.log(this.isError);
      let data = await response.json();
      if (data) {
        this.results = []
        for (let item in data) {
          this.results.push(data[item]);
          this.isloading = false;
        }
      } else {
        console.log(this.isError);
        this.isloading = false;
        this.results = [];
      }
    }
    catch(e){
             this.isError = true;
    }
    }
   
  },
  mounted() {
    this.loadResults();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
