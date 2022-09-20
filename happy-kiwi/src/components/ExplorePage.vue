<template>
  <div class="ExploreWrapper createPostContainer">
    <div id="bg">
      <img class="back" src="../assets/Explore_Page.jpg" alt="" />
    </div>

    <!-- EDIT VIEW -->
    <div class="boxWrapper" v-show="!postSwitch">
      <div class="post">
        <div><h2 class="head centerContainer">Edit Post</h2></div>
        <label class="title" for="Post ID">Post ID:</label>
        <input
          class="createBox"
          type="title"
          v-model.trim="id"
          disabled
          placeholder="Post ID"
        /><br />
        <label class="title" for="Animal Name">Animal Name:</label>
        <input
          class="createBox"
          type="text"
          v-model="formValues.animalName"
        /><br />
        <label class="title" for="Location">Location:</label>
        <input
          class="createBox"
          type="text"
          v-model="formValues.location"
        /><br />
        <label class="title" for="Image Url">Image URL:</label>
        <input
          class="createBox"
          type="text"
          v-model="formValues.imgLink"
        /><br />
        <label class="title" for="Description">Description:</label>
        <input
          class="desBox"
          type="text"
          v-model="formValues.description"
        /><br />
        <div class="buttonBox">
          <button @click="postSwitch = true" class="editCancel">Cancel</button>
          <button @click="deleteDoc(id)" class="editDelete">
            Delete Document
          </button>
          <button @click="updateDoc" class="editUpdate">Update Document</button>
        </div>
      </div>
    </div>
    <!-- POST VIEW -->
    <div class="postDisplay" v-show="postSwitch">
      <ul class="postContainer">
        <li v-for="post in posts" :key="post">
          <div class="postImage">
            <img :src="post.imgLink" alt="" class="postImg" />
          </div>
          <div class="postContent">
            <h2>{{ post.animalName }}</h2>
            <h3>{{ post.location }}</h3>
            <p>{{ post.description }}</p>
          </div>
          <div class="postButtons">
            <button class="commentBtn">Comment</button>
            <button
              class="editBtn"
              @click="getDoc(post._id), (postSwitch = false)"
            >
              Edit
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const api =
  "https://curious-parfait-81c145.netlify.app/.netlify/functions/api/";
export default {
  name: "ExplorePage",
  data() {
    return {
      posts: [],
      id: "",
      formValues: {
        animalName: "",
        location: "",
        description: "",
        imgLink: "",
      },
      postSwitch: true,
    };
  },
  methods: {
    clearInputs() {
      this.animalName = "";
      this.location = "";
      this.description = "";
      this.imgLink = "";
    },
    getDoc(id) {
      this.id = id;
      fetch(api + this.id, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.formValues.animalName = data.animalName;
          this.formValues.location = data.location;
          this.formValues.description = data.description;
          this.formValues.imgLink = data.imgLink;
          this.getAll();
        })
        .catch((err) => {
          if (err) throw err;
        });
    },
    updateDoc() {
      fetch(api + this.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formValues),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          alert("Work has been Updated");
          this.getAll();
          this.clearInputs();
          this.postSwitch = true;
        })
        .catch((err) => {
          if (err) throw err;
        });
    },
    deleteDoc(id) {
      fetch(api + id, {
        method: "DELETE",
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          alert("Work has been deleted");
          this.getAll();
          this.postSwitch = true;
        })
        .catch((err) => {
          if (err) throw err;
        });
    },
    getAll() {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          this.posts = data;
        })
        .catch((err) => {
          if (err) throw err;
        });
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style lang="scss" scoped>

.createPostContainer {
  display: flex;
  justify-content: center;
}

.boxWrapper {
  width: 672px;
  padding: 40px 40px;
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: var(--boxBackground);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(27px);
  overflow-y: scroll;
}

.post {
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}

.postDisplay {
  align-content: center;
}

.centerContainer {
  display: flex;
  justify-content: center;
}

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
}
.commentBtn:hover {
  border-color: var(--white);
}
.commentBtn:focus,
.commentBtn:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
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
}

button {
  padding: 0.6em 1.2em;
  font-weight: 900;
  font-size: larger;
  font-family: "Ubuntu", sans-serif;
  background-color: var(--buttonGreen);
  transition: border-color 0.25s;
  color: var(--white);
}

button:hover {
  border-color: white;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.createBox {
  height: 30px;
  display: block;
  margin-left: 45px;
  margin-right: 45px;
}

.desBox {
  margin-left: 45px;
  margin-right: 45px;
  height: 90px;
  display: block;

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
  .boxWrapper {
    width: 376px;
    // margin-left: 2rem;
  }
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
