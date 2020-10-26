<template>
  <div class="container">
    <div class="topics-container">
      <div class="topic" v-for="topic in topics" :key="topic.id">
        <h2>{{topic.name}}</h2>
        <router-link to="/cardset" class="btn">Study</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      topics : [
        {
          id: 0,
          name: 'Topic #0',
        }
      ],
    }
  },
  components: {
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  text-decoration: none;
}

.container {
  max-width: 1200px;
  padding: 20px 30px;
}

.topics-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.topic {
  max-width: 250px;
  width: 100%;
  padding: 20px;
  border: 2px solid #2c3e50;
  border-radius: 10px;
}

.btn {
    background: #41b883;
    border-radius: 5px;
    border: none;
    display: inline-block;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    margin: 10px auto;
}
</style>