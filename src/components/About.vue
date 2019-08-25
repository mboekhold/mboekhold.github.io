<template>
  <div class="main clearfix">
      <div class="header">
          <h1>About me</h1>
      </div>
      <div class="profile">
        <img class="profile-pic" src="../assets/about_me.jpeg" alt="ImgPlaceholder">
      </div>
      <div class="bio">
        <p>Hi, I'm Miguel. I began working at the infrastructure level of what makes up most modern solutions for big and small tech companies. I focused
          on ensuring continuous operability, security and availability of what allows them to serve most of their services. I eventually gained interest of the
          services that were hosted there and decided to get into Development. It has been endless exploration from that point on. I love programming, reading and kiteboarding
        </p>
        <p>For more info, check out my <a href=""><b>videos</b></a>, <a href="https://www.goodreads.com/review/list/62007488-miguel" target="_blank"><b>books</b></a></p>
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