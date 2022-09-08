<template>
    <div>

        <div class="postEdit" v-show="!postSwitch">
            <input type="text" v-model.trim="id" disabled placeholder="Post ID">
            <input type="text" placeholder="Animal Name" v-model="formValues.animalName">
            <input type="text" placeholder="Location" v-model="formValues.location">
            <input type="text" placeholder="Description" v-model="formValues.description">
            <input type="text" placeholder="Image Url" v-model="formValues.imgLink">
            <button @click="updateDoc">Update Document</button>
            <button @click="deleteDoc(id)">Delete Document</button>
        </div>
       
        <div class="postDisplay" v-show="postSwitch">
            <ul class="postContainer">
            <li v-for="post in posts" :key="post" >
                <div class="postImage">
                    <img :src="post.imgLink" alt=""/>
                </div>
                <div class="postContent">
                    <h2>{{post.animalName}}</h2>
                    <h3>{{post.location}}</h3>
                    <p>{{ post.description }}</p>
                </div>
                <div class="postButtons">
                    <button>Comment</button>
                    <button class="editBtn" ><a href="#" @click="getDoc(post._id), postSwitch = false">Edit</a></button> 
                </div>
            </li>
            </ul>
        
        </div>
  
  
    </div>
 </template>
  
 <script>
const api = "https://curious-parfait-81c145.netlify.app/.netlify/functions/api/";
 export default{
   name: 'ExplorePage',
   data() {
     return {
       posts: [],
       id: "",
       formValues: {
         animalName: "",
         location: "",
         description: "",
         imgLink: ""
       },
       postSwitch: true
     }
   },
   methods: {
      clearInputs(){
                this.animalName = ""
                this.location = ""
                this.description = ""
                this.imgLink = ""
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
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.formValues)
            })
            .then((response) => response.text())
            .then((data) => {
            console.log(data)
            alert("Work has been Updated")
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
            alert("Work has been deleted")
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
 ul {
    list-style-type: none;
 }

 li{
    background-color: white;
    color: black;
    padding: 20px;
 }

 img{
    width: 300px;
    height: 300px;
    object-fit: cover;
 }
</style> 