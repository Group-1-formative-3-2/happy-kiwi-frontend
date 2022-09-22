<!-- CODED BY MOYSAR WITH SUBMIT PREVENT FUNCTIONAILTY ADDED BY AMY -->

<template>

    <div class='createPostContainer'>
        <div id='bg'>
            <img class='back' src='../assets/Create_Post_Page.jpg' alt=''>
        </div>
        <div class='boxWrapper'>
            <form class='post' v-if='submitPrevent' @submit.prevent='preventPost'>
                <div>
                    <h2 class='head centerContainer'>Create Post</h2>
                </div>
                <label class='title' for='Animal Name'>Animal Name:</label>
                <input class='createBox' type='text' v-on:input='formValues.animalName = $event.target.value'>
                <br>
                <label class='title' for='Location'>Location:</label>
                <input class='createBox' type='text' v-on:input='formValues.location = $event.target.value'>
                <br>
                <label class='title' for='Image Url'>Image URL:</label>
                <input class='createBox' type='text' v-on:input='formValues.imgLink = $event.target.value'>
                <br>
                <label class='title' for='Description'>Description:</label>
                <textarea class='desBox' type='text' v-on:input='formValues.description = $event.target.value'></textarea>
                <br>
                <div class='centerContainer'>
                    <input type="submit" value="Post" class='postBtn'/>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
    const api = 'https://curious-parfait-81c145.netlify.app/.netlify/functions/api/';
    export default{
        name: 'CreatePostPage',
        data() {
            return {
                posts: [],
                id: '',
                formValues: {
                location: '',
                animalName: '',
                imgLink: '',
                description: ''
                },
                submitPrevent: true
            }
            },
            methods: {
             clearInputs(){
                this.location = ''
                this.animalName = ''
                this.imgLink = ''
                this.description = ''
            },
            getPosts(){
                fetch(api)
                .then((response) => response.json())
                .then((data) => {
                this.posts = data
                })
                .catch((err) => {
                if (err) throw err;
                })
            },
            preventPost() {
                if (
                    this.formValues.location === '' &&
                    this.formValues.animalName === '' &&
                    this.formValues.imgLink === '' &&
                    this.formValues.description === ''
                ) {
                    this.submitPrevent = true
                    alert('Please Complete the Form')
                }
                else {
                    this.submitPrevent = false

                    fetch(api + this.id, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.formValues)
                    })
                        .then((response) => response.text())
                        .then(
                        this.submitPrevent = true
                        )
                        .then((data) => {
                        alert('Work has been Posted')
                        this.getPosts()
                        this.clearInputs()
                        window.location.replace('explore');
                        })
                        .catch((err) => {
                        if (err) throw err;
                        })
                }
            },
        },
        mounted(){
                this.getPosts();
            }
    }
</script>

<!-- Google Fonts Links -->

<style lang='scss' scoped>
    .head {
      font-family: 'Ubuntu', sans-serif;
      font-weight: 700;
      font-size: 25px;
      color: var(--white);
      margin-top: 0;
    }

</style>