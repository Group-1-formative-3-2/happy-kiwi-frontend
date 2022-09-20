<template>
  <div class="createPostContainer">
    <div id="bg">
      <img class="back" src="../assets/Create_Post_Page.jpg" alt="" />
    </div>
    <div class="boxWrapper">
      <div class="post">
        <div><h2 class="head centerContainer">Create Post</h2></div>
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
        <div class="centerContainer">
          <button class="postBtn" @click="createPost">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const api =
  "https://curious-parfait-81c145.netlify.app/.netlify/functions/api/";
export default {
  name: "CreatePostPage",
  data() {
    return {
      posts: [],
      id: "",
      formValues: {
        location: "",
        animalName: "",
        imgLink: "",
        description: "",
      },
    };
  },
  methods: {
    clearInputs() {
      this.location = "";
      this.animalName = "";
      this.imgLink = "";
      this.description = "";
    },
    createPost() {
      fetch(api + this.id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formValues),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          this.$router.push("/");
        })
        .catch((err) => {
          if (err) throw err;
        });
    },
    mounted() {
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
};
</script>


<style lang="scss" scoped>
.back {
  width: 60%;
  height: 60%;
  position: absolute;
  z-index: 0;
}

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

.centerContainer {
  display: flex;
  justify-content: center;
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

.postBtn {
  background-color: var(--buttonGreen);
  color: var(--white);
  font-family: "Open Sans", sans-serif;
  font-size: larger;
  font-weight: 900;
  width: 190px;
  height: 49px;
  border-style: none;
  padding: 0.5rem 0.75rem;
}


.postBtn:hover {
  border-style: solid;
  border-color: var(--white);
}
.postBtn:focus,
.postBtn:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.head {
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: var(--white);
  margin-top: 0;
}


</style>
