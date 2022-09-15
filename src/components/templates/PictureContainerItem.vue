<template>
  <div class="picture-container-item">
    <div class="box">
      <div class="spin-container">
        <div class="shape">
          <div class="bd"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.picture-container-item {
  min-height: 20rem;
  min-width: 20rem;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;

  .box {
    width: 30vmin;
    height: 30vmin;
    border: 1px dashed rgba(255, 255, 255, 0.4);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      border: 1px dashed rgba(255, 255, 255, 0.4);
      transform: scale(1.42);
    }
  }

  .spin-container {
    width: 100%;
    height: 100%;
    animation: spin 12s linear infinite;
    position: relative;
  }

  .shape {
    width: 100%;
    height: 100%;
    transition: border-radius 1s ease-out;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    animation: morph 8s ease-in-out infinite both alternate;
    position: absolute;
    overflow: hidden;
    z-index: 5;
  }

  .bd {
    width: 142%;
    height: 142%;
    position: absolute;
    left: -21%;
    top: -21%;
    background: url(../../assets/axel.png);
    background-size: 100%;
    background-position: center center;
    display: flex;
    color: #003;
    font-size: 5vw;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    animation: spin 12s linear infinite reverse;
    opacity: 1;
    z-index: 2;
  }

  @keyframes morph {
    0% {
      border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
    }
    100% {
      border-radius: 40% 60%;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
}
</style>
