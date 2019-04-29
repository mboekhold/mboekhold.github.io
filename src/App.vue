<template>
  <div class="container">
    <div class="left-container">
      <div class="clearfix">
          <div class="title">
              <h1 class="full-name">
                  <a href="">Miguel Boekhold</a>
              </h1>
              <h2 class="tag-line">Software Developer</h2>
          </div>
          <div class="nav clearfix">
              <div class="nav-container">
                  <ul class="menu-items">
                    <router-link tag="li" active-class="active" to="/" exact><a>Projects</a></router-link>
                    <router-link tag="li" active-class="active" to="/resume"><a>Resume</a></router-link>
                    <router-link tag="li" active-class="active" to="/about"><a>About</a></router-link>
                    <router-link tag="li" active-class="active" to="/contact"><a>Contact</a></router-link>
                  </ul>
              </div>           
          </div>
          <div class="socials">
                  <a href="mailto:miguel_boekhold@hotmail.com" title="E-mail"><i class="fas fa-envelope fa-lg"></i></a> 
                  <a href="https://github.com/mboekhold" title="Miguel's Github" target="_blank"><i class="fab fa-github fa-lg"></i></a>
                  <a href="https://www.linkedin.com/in/miguelboekhold/" title="Miguel's Linkedin" target="_blank"><i class="fab fa-linkedin fa-lg"></i></a>
          </div>
            </div>
    </div>
    <router-view />
    
   
</div>
</template>

<script>
export default {
  name: 'Projects',
  created() {
    document.title = "Miguel Boekhold | Software Developer"
  },
  data() {
},
methods: {
    

  }
}

</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');
@import url("https://use.fontawesome.com/releases/v5.8.0/css/all.css"); 
body {
    font-size: 100%;
    font-family: 'Open Sans', serif;
    font-weight: normal;
    color: black;
    margin: 0;
    line-height: 1;

}

a { text-decoration: none; color: black; outline: none;}

.container {
    max-width: 62.5em;
    margin: 0 auto;
    padding: 0;
    border: 0;

}


.left-container{
    width: 220px;
    position: fixed;
    float:left;
    margin-left: 20px;
    padding-top: 40px;
}

.title {
    margin: 0px 0 30px 0;
    padding: 0;
}

h1{
    font-size: 1.2em;
    text-transform: uppercase;
}

.title h2 {
    font-size: .8em;
    margin-top: 5px;
    font-weight: 400;
}

.nav{
    margin-bottom: 40px;
}

.nav ul {
    list-style: none;
    
    padding: 0;
}

.nav ul li a {
    font-weight: 700;
    font-size: 1.0em;
    line-height: 2.3em;
    text-transform: uppercase;
    color: #999;
    transition: all .2s ease-in;
    border-bottom: 3px solid transparent;
}
.nav ul li a:hover{
    color: #000;
  }

.nav ul li.active a{
    color: #000;
    border-bottom: 3px solid #000;
}

.nav ul li {
    margin: 0 0 5px 0;
}
.main {
    float: right;
    width:72%;
    padding: 40px 0 0 0;
    border-bottom: 1px solid #e3e2de;
    margin: 0 20px 30px 0;
}

.header {
    padding: 10px 0 2px 0;
    margin: 0 0 30px 0;
    border-bottom: 1px solid #000;
    font-size:1.3em;
    line-height: .7em;
}


.socials a {
    padding: 5px;
}
.clearfix::after {
    content: "\0020";
    display: block;
    height: 0;
    visibility: hidden;
}

.clearfix::before {
    content: "\0020";
    display: block;
    height: 0;
    visibility: hidden;
}
/* Layouts small than 600px, mainly mobile */
@media only screen and (max-width: 480px ), screen and(max-device-width: 480px), screen and (max-width: 600px ){
    html {
      -webkit-text-size-adjust: none;
  }

  .socials {
      display:none;
  }
  .header {
    padding: 10px 0 20px 0;
    margin: 0 0 30px 0;
    border-bottom: 1px solid #000;
    font-size:1.3em;
    line-height: .7em;
}

  .header h1 { font-size: .8em;}
  h2 { font-size: .7em;}
  h3 { font-size: .7.0em;}
  h4 { font-size: .9em;}
  h5 { font-size: .8em;}

  .left-container {
      text-align: center;
      width: 99%;
      padding-bottom: 15px;
      margin: 0 auto;
      position: relative;
  }

  .main {
      width: 94%;
      margin: 0 auto 30px auto;
      padding: 0;
      float: none;
  }

  .nav {
      position: relative;
    margin-top: 0;
    top:0;
    right: 0;
    width: 100%;
    height: auto;
    margin: 0;
    display: block;
  }

  .nav li {
    font-size: 1em;
    margin: 0 0 0 0;
    display: inline-block;
    padding: 0 5px 0 5px;
  }

  
    
}
</style>
