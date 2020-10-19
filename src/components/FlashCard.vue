<template>
    <div :class="['card-container', {'answered': isAnswered}]">
        <div class="inner">
            <div class="card-front">
                <h2 class="question">Question?</h2>
                <div class="user-answer-container">
                    <input type="text" name="answer" id="answer" placeholder="Your answer" v-model="currentAnswer">
                    <button class="btn" @click="isAnswered = !isAnswered">Submit anwser</button>
                </div>
            </div>
            <div class="card-back">
                <h3>Answer:</h3>
                <p>The correct answer</p>
                <h3>Your answer</h3>
                <p>{{ currentAnswer }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentAnswer: '',
            isAnswered: false,
        };
    }
};
</script>

<style scoped>
.card-container {
    color: #fff;
    max-width: 400px;
    height: 300px;
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

input[type=text] {
    background: none;
    border: 1px solid #ffffff;
    padding: 5px 10px;
    border-radius: 4px;
    color: #fff;
    margin-bottom: 15px;
    font-size: 16px;
}

input[type=text]::placeholder {
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
</style>