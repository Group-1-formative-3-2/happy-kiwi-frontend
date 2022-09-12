<template>

    <div>
        <div id='bg'>
            <img class='back' src='../assets/Create_Post_Page.jpg' alt=''>
        </div>
        <div class='boxWrapper'>
            <div class='post'>
                <div><h2 class='head'>Create Post</h2></div>
                <label class='title' for='Animal Name'>animal Name:</label>
                <input class='createBox' type='text' v-model="formValues.animalName"><br>
                <label class='title' for='Location'>location:</label>
                <input class='createBox' type='text' v-model="formValues.location"><br>
                <label class='title' for='Image Url'>image URL:</label>
                <input class='createBox' type='text' v-model="formValues.imgLink"><br>
                <label class='title' for='Description'>description:</label>
                <textarea class='desBox' rows='4' cols='50' type='text' v-model="formValues.description"></textarea><br>
                <div>
                    <button class='postBtn' @click="createPost">Post</button>
                </div>
            </div>
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
                }
            }
            },
            methods: {
             clearInputs(){
                this.location = ''
                this.animalName = ''
                this.imgLink = ''
                this.description = ''
            },
            createPost(){
                fetch(api + this.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formValues)
                })
                .then((response) => response.text())
                .then((data) => {
                console.log(data)
                this.$router.push('/explore')
                })
                .catch((err) => {
                if (err) throw err;
                })
            },
            mounted(){
            fetch(api)
                .then((response) => response.json())
                .then((data) => {
                this.posts = data
                })
                .catch((err) => {
                if (err) throw err;
                })
            }
        }
    }
</script>

<!-- Google Fonts Links -->
<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
</style>