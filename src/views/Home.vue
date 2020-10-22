<template>
  <div class="home">
    <flash-card></flash-card>
    <div class="deck-buttons-container">
      <button class="btn">Previous</button>
      <button class="btn">Next</button>
    </div>
  </div>
</template>

<script>
import FlashCard from '@/components/FlashCard.vue';

export default {
  name: "Home",
  components: {
    FlashCard
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.deck-buttons-container .btn {
  margin: 10px;
}

.btn {
    background: #41b883;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    margin: 10px auto;
}
</style>