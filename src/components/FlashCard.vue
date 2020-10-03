<template>
    <div class="card-container">
        <div class="inner">
            <div class="card-front">
                <h2 class="question">Question?</h2>
            </div>
            <div class="card-back">
                <p class="answer">Answer: ...</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-container {
    color: #fff;
    max-width: 400px;
    height: 300px;
    margin: 0 auto;
    perspective: 1200px;
}

.card-container:hover .inner {
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
</style>