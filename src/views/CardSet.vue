<template>
    <div>
        <flash-card :content="question"></flash-card>
        <div class="deck-buttons-container">
            <button class="btn">Previous</button>
            <button class="btn" @click="nextCard()">Next</button>
        </div>
    </div>
</template>

<script>
import FlashCard from "@/components/FlashCard.vue";
export default {
    data() {
        return {
            question: {
                id: 0,
                text: "Question?",
                answer: "The correct answer",
                accuracy: 0
            },
            cards: []
        };
    },
    components: {
        FlashCard
    },
    created () {
        const cardset = this.$store.getters.getCards('vue');
        this.cards = cardset.cards;
        this.question = cardset.cards[0];
    },
    methods: {
        nextCard() {
            console.log("a");
            this.question = this.cards.find(elem => {
                return elem.id == (this.question.id + 1);
            });
            console.log(this.question);
            this.question.text = "aaa"
        }
    },
};
</script>

<style scoped>
.deck-buttons-container .btn {
  margin: 10px;
}
</style>