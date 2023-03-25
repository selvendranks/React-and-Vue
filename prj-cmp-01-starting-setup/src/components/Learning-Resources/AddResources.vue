<template>
  <div>
    <base-dialogue v-if="hasError" title="Invalid Input" @click="closeModal">
      <template #default>
        <p>Please don't leave anything empty</p>
      </template>
      <template #actions>
        <base-button @click="closeModal">Okay</base-button>
      </template>
    </base-dialogue>
    <base-card>
      <form @submit.prevent="submit">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" ref="title" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            ref="desc"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input type="text" id="link" name="link" ref="link" />
        </div>
        <div class="form-control">
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialogue from '../UI/BaseDialogue.vue';
export default {
  components: { BaseDialogue, BaseButton },
  inject: ['pushResources','switchSubmit'],
  data() {
    return {
      hasError: false,
    };
  },
  methods: {
    submit() {
      let formdata = {
        title: this.$refs.title.value,
        description: this.$refs.desc.value,
        link: this.$refs.link.value,
      };

      if (
        formdata.title.trim() === '' ||
        formdata.description.trim() === '' ||
        formdata.link.trim() === ''
      ) {
        this.hasError = true;
      }
      if (this.hasError === false) {
        this.pushResources(formdata);
        this.switchSubmit();
      }
    },
    closeModal() {
      this.hasError = false;
      console.log('clicked');
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
