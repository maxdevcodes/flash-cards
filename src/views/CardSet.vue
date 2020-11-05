<template>
    <div>
        {{cardsOrder}}
        {{cardIndex}}
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
            cards: [],
            cardsOrder: [],
            cardIndex: 0,
        };
    },
    components: {
        FlashCard
    },
    created () {
        const cardset = this.$store.getters.getCards('vue');
        this.cards = cardset.cards;
        this.question = cardset.cards[cardset.currentSequence[0]];
        this.cardsOrder = cardset.currentSequence;
    },
    methods: {
        nextCard() {
            this.cardIndex = (this.cardIndex + 1) % this.cardsOrder.length;

            this.question = this.cards.find(elem => {
                return elem.id == this.cardsOrder[this.cardIndex];
            });
        }
    },
};
</script>

<style scoped>
.deck-buttons-container .btn {
  margin: 10px;
}
</style>