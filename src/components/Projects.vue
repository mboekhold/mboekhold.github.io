<template>
  <div class="main clearfix">
      <div class="header">
          <h1>Projects</h1>
      </div>
      <div class="projects">
        <div class="project" v-for="project in projects" :key="project.id">
          <div class="project-logo"><a v-bind:href="project.link" target="_blank"><img v-bind:src="project.logo"></a></div>
          <h3>{{project.title}}</h3>
          <div class="project-link"><a href="https://github.com/Zarad1993/dyc">{{project.link}}</a></div>
          <div class="project-description clearfix">{{project.description}}</div>
        </div>
      </div>
    </div>


</template>

<script>
require('../assets/dyc_logo.png')
export default {
  name: 'Projects',
  data() {
    return {
      project: '',
      projects: [
        {"logo" : require('../assets/dyc_logo.png'), "title" : "DYC", "link" : "https://github.com/Zarad1993/dyc", "description" : "Contributor to DYC, which is a code documenting tool that will help improve the readability of your code"},
      ]
    }
  },
  methods: {
    addProject(){
      this.$validator.validateAll().then((result) => {
        if(result){
          this.projects.push({name: this.project});
          this.project = '';
        }
      });  
    },
    remove(id){
      this.projects.splice(id, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
  .holder {
    background: #fff;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }
  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i {
  float:right;
  cursor:pointer;
}


.project {
  margin-bottom: 30px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e3e2de;
}
.project::after {
  display: block;
  content: "";
  width: .5rem;
  height: .5rem;
  border: #b4b6b8 .1rem solid;
  position: relative;
  top: 0.73rem;
  left: 50%;
  margin-left: -.25rem;
  background: #fff;
  border-radius: 100%;
  box-shadow: #fff 0 0 0 5px;
}
.project-logo {
  float: left;
}

.project h3 {
  margin: 0 0 10px 0;
}

.project-link {
  font-size: .9rem;
  
}
.project-link a{
   color: #007199;
}
.project-description{
  margin-top: 10px;
}


.project img {
  width: 180px;
  height: 180px;
}
</style>
