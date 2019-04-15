<template>
  <div class="main clearfix">
      <div class="header">
          <h1>Resume</h1>
      </div>
      <div class="main-content">
      <ul class="job-items">
       <li v-for="(data, index) in work" :key="index">
         <h3>{{ data.title}}</h3>
         <h4>{{data.data}}</h4>
       </li>
     </ul>

     <h1 class="education-header">Education</h1>
          <ul class="education-items">
            <li v-for="(data, index) in education" :key="index">
              <h3>{{ data.institution}}</h3>
              <h4>{{data.degreeInfo}}</h4>
              <h4> {{data.year}}</h4>
            </li>
          </ul>
     </div>
          
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      work: [
        {"title" : "Operations Support", "data" : "Data Center Arnhem, Feb 2017 - Aug 2017", "description" :" " },
        {"title" : "Intern", "data" : "HEMA, Oct 2015 - Apr 2016 ", "description" :" " }
      ],
      education: [
        {"institution" : "Fonty's Hogeschool ICT- Eindhoven", "degreeInfo" : "Bachelor's degree, Software Engineering", "year":"2018 - 2021"},
        {"institution" : "ROC Midden Nederland - Utrecht", "degreeInfo" : "Associate's degree, Network and System Administrator", "year":"2014 - 2017"},
      ]
    }
  }
}
</script>


<style scoped>
.main-content ul li h3 {
  font-size: 1em;
  margin: 40px 0 0 0;
}

.main-content ul li h4 {
  font-style: italic;
  font-weight: 200;
  margin: 8px 0 10px 0;
}
.main-content ul li {
  list-style-type: none;
}

.education-header {
  padding: 10px 0 2px 0;
  margin: 40px 0 30px 0;
  font-size:1.3em;
  line-height: .7em;
}
@media only screen and (max-width: 480px ), screen and(max-device-width: 480px), screen and (max-width: 600px ){
    html {
      -webkit-text-size-adjust: none;
  }
.education-header{
      font-size: 1em;
  }
}
</style>