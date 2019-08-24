<template>
  <div class="main clearfix">
      <div class="header">
          <h1>About me</h1>
      </div>
      <div class="profile">
        <img class="profile-pic" src="../assets/about_me.jpeg" alt="ImgPlaceholder">
      </div>
      <div class="bio">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Sit amet consectetur adipiscing elit. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. 
        Ullamcorper sit amet risus nullam eget felis eget nunc.</p>
      </div>
      
    </div>
</template>


<script>
export default {
  name: 'About',
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>


<style scoped>
.profile-pic {
  display: block;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: auto;
}
img { 
  object-fit:cover;
  object-position: 0px -70px; 
} 
.bio {
  margin-top: 60px;
  text-align: left;
  line-height: 1.8;
}

</style>