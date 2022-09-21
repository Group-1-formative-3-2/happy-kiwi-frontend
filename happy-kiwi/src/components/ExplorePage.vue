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
              <button @click='postSwitch = true' class='editCancel'>Cancel</button>
              <button @click='deleteDoc(id)' class='editDelete'>Delete Document</button>
              <button @click='updateDoc' class='editUpdate'>Update Document</button>
            </div>
          </div>
        </div>

      <!-- POST VIEW -->
      <div class='postDisplay' v-show='postSwitch'>
        <ul class='postContainer'>
          <li v-for='(post, i) in posts' :key='i' class='postList'>
            <div class='postImage'>
              <img :src='post.imgLink' alt='' class='postImg'/>
            </div>
            <div class='postContent'>
              <h2>{{post.animalName}}</h2>
              <h3>{{post.location}}</h3>
              <p>{{ post.description }}</p>
            </div>

            <!-- COMMENT VIEW -->
            <div v-show='!commentToggle'>
              <div>
                <h4>Comments:</h4>
                <ul class='commentListContainer'>
                  <li v-for='(postCom, i) in postedComments[post._id]' :key='i' class='commentList'>
                    <h5>{{postCom.user_id}}: </h5>  <p>{{postCom.message}}</p>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Leave a comment:</h5>
              </div>
              <div>
                <textarea
                v-bind:value='commentFormValues.message'
                v-on:input='commentBoxInput = $event.target.value'
                outlined
                label='Please type your comment'
                @keyup.enter='postComment(posts.post_id)'
                cols='40'
                rows='5'>
                </textarea>
              </div>
              <div>
                <button class='postBtn' title='Post Comment' @click='showComments(post._id), postComment(details.post_id)'>Post Comment</button>
              </div>
            </div>
            <!-- COMMENT & EDIT BUTTONS  -->
            <div class='postButtons'>
              <button v-if="commentToggle" class='commentBtn' @click='commentToggle = !commentToggle'>Show Comments</button>
              <button v-if="!commentToggle" class='commentBtn' @click='commentToggle = !commentToggle'>Hide Comments</button>
              <button class='editBtn' @click='getDoc(post._id), postSwitch = false'>Edit</button> 
            </div>
          </li>
        </ul>
      </div>
    </div>
 </template>
  
 <script>
  const api = 'https://curious-parfait-81c145.netlify.app/.netlify/functions/api/';
  const apiMessages = 'https://brilliant-swan-199f59.netlify.app/.netlify/functions/api/';

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
          allComments: [],
          commentList: [],
          postedComments: [],
          postsData: [],
          commentBoxInput: '',
          commentFormValues: {
            user_id: '',
            post_id: '',
            message: '',
          },
          details: {
            post_id: ''
          },
          msg: '',
          postSwitch: true,
          commentToggle: true
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
            data.forEach((post) => {
              this.postsData[post._id] = post;
              });
          })
          .catch((err) => {
            if (err) throw err;
          })
        },
        showComments(post_id) {
        this.details.post_id = post_id;
        this.getComments(post_id);
      },
      postComment(post_id) {
        this.commentFormValues.post_id = post_id;
        this.commentFormValues.message = this.commentBoxInput;
        this.commentFormValues.user_id = this.formValues.user_id || 'Guest';
        //save to message database
        fetch(apiMessages, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.commentFormValues),
          })
          .then((response) => response.text())
          .then((data) => {
            this.getAllComments(); // refresh all message list
          })
          .catch((err) => {
            if (err) throw err;
          });
        this.commentFormValues.message = '';
        this.commentBoxInput = '';
        
      },
      getComments(post_id) {
        this.commentList = [];
        if (post_id) {
          let singlePost = [];
          this.allComments.forEach((msg) => {
            if (msg.post_id == post_id) {
              singlePost.push(msg);
            }
          });
          this.commentList = singlePost;
        }
      },
      getAllComments() {
        fetch(apiMessages)
        .then((response) => response.json())
        .then((data) => {
          this.allComments = data;
          this.postedComments = this.allComments.reduce((results, msg) => {
            results[msg.post_id] = results[msg.post_id] || [];
            results[msg.post_id].push(msg);
            return results;
          }, {});
        })
        .catch((err) => {
          if (err) throw err;
        });
      },
      },
      mounted(){
        this.getAll();
        this.getAllComments();
      }
  }
</script>


  <style lang="scss" scoped>
  
 
  .head {
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    font-size: 25px;
    color: var(--white);
    margin-top: 0;
  }
  
  /* Explore Page */
  ul {
    list-style-type: none;
}
  
  li {
    background-color: rgba(255, 255, 255, 0.95);
    color: black;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .commentListContainer{
    overflow: scroll;
    height: 85px;
    padding: 0;
    .commentList{
      padding: 0px;
      background-color: transparent;   
      h5{
        margin: 0;
      }
      p{
        margin-top: 0;
      }
    }
  }
  
  .postContainer {
    display: grid;
    margin: 30px 50px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    padding: 0;
  }
  
  .postImg {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  
  .commentBtn {
    color: var(--white);
    padding: 0.6em 1.2em;
    font-weight: 900;
    font-size: larger;
    font-family: "Ubuntu", sans-serif;
    background-color: var(--commentGreen);
    transition: border-color 0.25s;
    border-style: none;
    .commentBtn:hover {
      border-color: var(--white);
    }
    .commentBtn:focus,
    .commentBtn:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }
  
  .editBtn {
    color: var(--white);
    padding: 0.6em 1.2em;
    font-weight: 900;
    font-size: larger;
    font-family: "Ubuntu", sans-serif;
    background-color: var(--editGreen);
    transition: border-color 0.25s;
    border-style: none;
  }
  
  .buttonBox {
    display: flex;
    justify-content: space-between;
    margin-left: 45px;
    margin-right: 45px;
  }
  
  .postButtons {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
  }
  
 
  .createBox {
    height: 30px;
    display: block;
    margin-left: 45px;
    margin-right: 45px;
  }
  
  .title {
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: var(--white);
    text-align: left;
    margin-left: 3rem;
    margin-bottom: 5px;
  }
  
  .editCancel {
    color: var(--white);
    padding: 0.6em 1.2em;
    font-weight: 900;
    font-size: larger;
    font-family: "Ubuntu", sans-serif;
    background-color: var(--buttonGreen);
    transition: border-color 0.25s;
    border-style: none;
  }
   
  .editDelete {
    color: var(--white);
    padding: 0.6em 1.2em;
    font-weight: 900;
    font-size: larger;
    font-family: "Ubuntu", sans-serif;
    background-color: var(--deleteRed);
    transition: border-color 0.25s;
    border-style: none;
  }
  
  .editUpdate {
    color: var(--white);
    padding: 0.6em 1.2em;
    font-weight: 900;
    font-size: larger;
    font-family: "Ubuntu", sans-serif;
    background-color: var(--editGreen);
    transition: border-color 0.25s;
    border-style: none;
  }
  
  textarea{
    width: 100%;
  }
  
  @media screen and (max-width: 1500px) {
    .postContainer {
      display: grid;
      margin: 30px 50px;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      padding: 0;
    }
    .postImg {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
  
  @media screen and (max-width: 800px) {
    .post {
      width: 600px;
    }
  
    .postContainer {
      display: grid;
      margin: 30px 50px;
      grid-template-columns: 1fr;
      gap: 50px;
      padding: 0;
    }
    .postImg {
      width: 100%;
    }
  }
  </style>
