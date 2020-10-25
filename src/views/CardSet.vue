<template>
    <div>
        <flash-card :content="question"></flash-card>
        <div class="deck-buttons-container">
            <button class="btn">Previous</button>
            <button class="btn">Next</button>
        </div>
    </div>
</template>

<script>
import FlashCard from "@/components/FlashCard.vue";
export default {
    data() {
        return {
            question: {
                text: "Question?",
                answer: "The correct answer",
                accuracy: 0
            }
        };
    },
    components: {
        FlashCard
    }
};
</script>

<style scoped>
.deck-buttons-container .btn {
  margin: 10px;
}
</style>