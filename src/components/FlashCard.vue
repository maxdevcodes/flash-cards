<template>
    <div :class="['card-container', {'answered': isAnswered}]">
        <div class="inner">
            <div class="card-front">
                <h2 class="question">{{ content.text }}</h2>
                <div class="user-answer-container">
                    <textarea name="answer" id="answer" cols="40" rows="10" placeholder="Your answer" v-model="currentAnswer"></textarea>
                    <button class="btn" @click="isAnswered = !isAnswered">Submit anwser</button>
                </div>
            </div>
            <div class="card-back">
                <h3>Answer:</h3>
                <p>{{ content.answer }}</p>
                <h3>Your answer</h3>
                <p>{{ currentAnswer }}</p>
                <h3>How was my answer?</h3>
                <div class="rate-answer-container">
                    <button class="btn" @click="accuracyUpdate(2)">Good</button>
                    <button class="btn" @click="accuracyUpdate(1)">Could improve</button>
                    <button class="btn" @click="accuracyUpdate(0)">Need to check again</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            default: function() {
                return {
                text: 'Question?',
                answer: 'The correct answer',
                accuracy: 0,
                }
            }
        }
    },
    data() {
        return {
            question: this.content,
            currentAnswer: '',
            isAnswered: false,
        };
    },
    methods: {
        accuracyUpdate(n) {
            this.$store.commit('setAccuracy', { cardset: 'vue', cardId: this.content.id, newAccuracy: n});
        }
    },
};
</script>

<style scoped>
.card-container {
    color: #fff;
    max-width: 500px;
    height: 400px;
    margin: 0 auto;
    perspective: 1200px;
}

.card-container.answered:hover .inner {
    transform: rotateY(-180deg);
}

.inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: .7s transform;
    background: #282c34;
    border-radius: 8px;
    padding: 10px 25px;
}

.card-front, .card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
}

.user-answer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

textarea {
    background: none;
    border: 1px solid #ffffff;
    padding: 5px 10px;
    border-radius: 4px;
    color: #fff;
    margin-bottom: 15px;
    font-size: 16px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    resize: none;
}

textarea::placeholder {
    color: #d2d2d2;
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

.rate-answer-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
</style>