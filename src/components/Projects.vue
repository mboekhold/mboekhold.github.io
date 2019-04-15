<template>
  <div class="main clearfix">
      <div class="header">
          <h1>Projects</h1>
      </div>
    </div>


</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      project: '',
      projects: [
        {"name" : "Did backend"},
        {"name" : "Vue.js"}
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
</style>
