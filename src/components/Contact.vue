<template>
  <div class="main clearfix">
      <div class="header">
          <h1>Contact</h1>
    
      </div>

    <div class="box">
        <form @submit="sendMessage" class="contect-form" method="post">
        <transition name="list" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul class="errors">
        <li v-for="(error) in errors" :key="error">{{ error }}</li>
        </ul>
        </p>
        </transition>
        <div class="field">
            <label class="label">Name</label>
            <input type="text" v-model="name" v-validate="'required'" name="name">
        </div>
        <div class="field">
            <label class="label">Email</label>
            <input type="email" class="input" name="email" v-model="email">
        </div>
        <div class="field">
            <label class="label">Message</label>
            <textarea rows = "7" cols = "80" name = "description" v-model="message">
            
            </textarea>
        </div>
        <div class="field has-text-right">
            <button type="submit" value="submit">Submit</button>
        </div>
        </form>
    </div>
    </div>
</template>


<script>
export default {
  name: 'About',
  data() {
    return {
        errors: [],
        name: '',
        email: '',
        message: ''
      
    }
  },
  methods: {
      sendMessage(e){
        if(this.$name && this.$email && this.$message)
        {
            return true;
        }

        this.errors = [];
        if(!this.$name){
            this.errors.push('Name required.');
        }
        if(!this.$email){
            this.errors.push('Email required.');
        }
        if(!this.$message){
            this.errors.push('Message required');
        }

        e.preventDefault();
      },
      track(){
          this.$ga.page('/contact')
      }
  }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.errors li {
    margin-top: 5px;
    font-weight: 300;
}



.label {
    display: block;
    margin-bottom: 5px;
    font-weight: 400;
}

.field {
    margin-bottom: 25px;
}

button {
    background-color: black;
    color: #fff;
}

button:hover {
    cursor: pointer;
}

</style>