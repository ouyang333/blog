<template>
  <div id="body">
    <div class="rain front-row">
      <div v-for="(item,i) in raindrop" :key="i" class="drop" :style="item.l_drop_">
        <div class="stem" :style="item.stem_splat"></div>
        <div class="splat" :style="item.stem_splat"></div>
      </div>
    </div>
    <div class="rain back-row">
      <div v-for="(item,i) in raindrop" :key="i" class="drop" :style="item.r_drop_">
        <div class="stem" :style="item.stem_splat"></div>
        <div class="splat" :style="item.stem_splat"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      raindrop: []
    };
  },
  methods: {
    makeItRain() {
      var dropsSite = 0;
      while (dropsSite < 95) {
        var dropsSiteAdd = Math.floor(Math.random() * 3 + 1);
        var dropsSpeed = Math.floor(Math.random() * 97 + 1);
        dropsSite += dropsSiteAdd;
        this.raindrop.push({
          l_drop_:
            "left:" +
            dropsSite +
            "%;bottom:" +
            (dropsSiteAdd + dropsSiteAdd - 1 + 100) +
            "%; animation-delay: 0." +
            dropsSpeed +
            "s; animation-duration: 0.5" +
            dropsSpeed +
            "s;",
          r_drop_:
            "right:" +
            dropsSite +
            "%;bottom:" +
            (dropsSiteAdd + dropsSiteAdd - 1 + 100) +
            "%; animation-delay: 0." +
            dropsSpeed +
            "s; animation-duration: 0.5" +
            dropsSpeed +
            "s;",
          stem_splat:
            "animation-delay: 0." +
            dropsSpeed +
            "s; animation-duration: 0.5" +
            dropsSpeed +
            "s;"
        });
      }
    }
  },
  created() {
    this.makeItRain();
  }
};
</script>

<style scoped>
html {
  height: 100%;
}

#body {
  position: relative;
  height: 100%;
  /* top: 1rem; */
  margin: 0;
  overflow: hidden;
}

.rain {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.rain.back-row {
  z-index: 1;
  bottom: 60px;
  opacity: 0.5;
}


.drop {
  position: absolute;
  bottom: 100%;
  width: 15px;
  height: 120px;
  pointer-events: none;
  animation: drop 0.5s linear infinite;
}

@keyframes drop {
  0% {
    transform: translateY(0vh);
  }
  75% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(100vh);
  }
}

.stem {
  width: 1px;
  height: 60%;
  margin-left: 7px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.25)
  );
  animation: stem 0.5s linear infinite;
}

@keyframes stem {
  0% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.splat {
  width: 15px;
  height: 10px;
  border-top: 2px dotted rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  opacity: 1;
  transform: scale(0);
  animation: splat 0.5s linear infinite;
}

@keyframes splat {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  80% {
    opacity: 1;
    transform: scale(0);
  }
  90% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
