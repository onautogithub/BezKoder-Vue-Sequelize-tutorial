<template>
<div class="submit-form">
  <div v-if="!submitted">
    <div class="form-group">
      <label for="title">
        Title
      </label>
      <input
      type="text"
      class="form-control"
      id="title"
      required
      v-model="tutorial.title"
      name="title"
      >
    </div>
    <div class="form-group">
      <label for="description">
        Description
      </label>
      <input
      class="form-control"
      id="description"
      required
      v-model="tutorial.description"
      name="description"
      >
    </div>
    <button class="btn btn-success" @click="saveTutorial" > submit</button>
  </div>
  <div v-else>
    <div>
    <h4>You submition was successfully</h4>
    <button class="btn btn-success" @click="newTutorial">Add Another</button>
    <button class="btn btn-success" @click="returnToList">Done</button>
    </div>
  </div>
</div>
</template>

<script>
import TutorialDataService from '../services/TutorialDataService'
export default {

  name: 'AddTutorial',

  data () {
    return {
      tutorial: {
        id: null,
        title: '',
        description: '',
        published: false
      },
      submitted: false
    }
  },
  methods: {

    saveTutorial () {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description
      }
      TutorialDataService.create(data).then(response => {
        this.tutorial.id = response.data
        console.log(response.data)
        this.submitted = true
      }).catch(e => {
        console.log(e)
      })
    },

    newTutorial () {
      this.submitted = false
      this.tutorial = {}
    },
    returnToList () {
      // `route` is either a string or object
      this.$router.push({name: 'list'})
    }
  }
}
</script>
