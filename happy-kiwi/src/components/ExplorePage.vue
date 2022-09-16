<template>
    <div class='ExploreWrapper createPostContainer'>
            <div id='bg'>
                <img class='back' src='../assets/Explore_Page.jpg' alt=''>
            </div>

      <!-- EDIT VIEW -->
        <div class='boxWrapper' v-show='!postSwitch'>
          <div class='post'>
            <div><h2 class='head centerContainer'>Edit Post</h2></div>
            <label class='title' for='Post ID'>Post ID:</label>
            <input class='createBox' type='title' v-model.trim='id' disabled placeholder='Post ID'><br>
            <label class='title' for='Animal Name'>Animal Name:</label>
            <input class='createBox' type='text' v-model='formValues.animalName'><br>
            <label class='title' for='Location'>Location:</label>
            <input class='createBox' type='text' v-model='formValues.location'><br>
            <label class='title' for='Image Url'>Image URL:</label>
            <input class='createBox' type='text' v-model='formValues.imgLink'><br>
            <label class='title' for='Description'>Description:</label>
            <input class='desBox' type='text' v-model='formValues.description'><br>
            <div class='buttonBox'>
              <button @click='postSwitch = true' class="editCancel">Cancel</button>
              <button @click='deleteDoc(id)' class="editDelete">Delete Document</button>
              <button @click='updateDoc' class="editUpdate">Update Document</button>
            </div>
          </div>
        </div>
      <!-- POST VIEW -->
      <div class='postDisplay' v-show='postSwitch'>
        <ul class='postContainer'>
          <li v-for='post in posts' :key='post' >
            <div class='postImage'>
              <img :src='post.imgLink' alt='' class="postImg"/>
            </div>
            <div class='postContent'>
              <h2>{{post.animalName}}</h2>
              <h3>{{post.location}}</h3>
              <p>{{ post.description }}</p>
            </div>
            <div class='postButtons'>
              <button class='commentBtn'>Comment</button>
              <button class='editBtn' @click='getDoc(post._id), postSwitch = false'>Edit</button> 
            </div>
          </li>
        </ul>
      </div>
    </div>
 </template>
  
 <script>
const api = 'https://curious-parfait-81c145.netlify.app/.netlify/functions/api/';
 export default{
   name: 'ExplorePage',
   data() {
     return {
       posts: [],
       id: '',
       formValues: {
         animalName: '',
         location: '',
         description: '',
         imgLink: ''
       },
       postSwitch: true
     }
   },
   methods: {
      clearInputs(){
                this.animalName = ''
                this.location = ''
                this.description = ''
                this.imgLink = ''
            },
      getDoc(id) { 
        this.id = id
        fetch(api + this.id, {
            method: 'GET'
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            this.formValues.animalName = data.animalName
            this.formValues.location = data.location
            this.formValues.description = data.description
            this.formValues.imgLink = data.imgLink
            this.getAll()
          })
          .catch((err) => {
            if (err) throw err;
          })
      },
      updateDoc(){
            fetch(api + this.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.formValues)
            })
            .then((response) => response.text())
            .then((data) => {
            console.log(data)
            alert('Work has been Updated')
            this.getAll()
            this.clearInputs()
            this.postSwitch = true
            })
            .catch((err) => {
            if (err) throw err;
            })
        },
      deleteDoc(id) { 
        fetch(api + id, {
            method: 'DELETE'           
          })
          .then((response) => response.text())
          .then((data) => {
            console.log(data)
            alert('Work has been deleted')
            this.getAll()
            this.postSwitch = true
          })
          .catch((err) => {
            if (err) throw err;
          })
        
      }, 
      getAll(){
        fetch(api)
        .then((response) => response.json())
        .then((data) => {
          this.posts = data
        })
        .catch((err) => {
          if (err) throw err;
        })
      }
    },
    mounted(){
      this.getAll()
    }
}
</script>
 
<style scoped>
  button:hover {
    border-color: white;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style> 