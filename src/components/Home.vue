<template>
  <div id="home" ref="home">
    <!-- 高斯模糊背景图，后续考虑和天气一起变换 -->
    <div id="bg"></div>
    <!-- 顶部header -->
    <div class="title">
      <!-- 希望可以找到合适的博客名svg特效，再不济找人定制也行 -->
      <p class="title-text eg-font" :style="rainy?'color:#fff':'color:#000'">San's blog</p>
      <!-- icon集合，用于跳转页面，暂定使用router-view实现子模块切换 -->
      <div class="icon-social">
        <el-tooltip
          v-for="(item,index) in icon"
          :key="index"
          :effect="theme"
          :content="item.title"
          placement="bottom"
          :open-delay="300"
        >
          <img :class="index==0?'weather':'icon'" @click="toPage(item.title)" :src="item.src" />
          <img v-if="index == 5" style="margin-right:1rem;" src="../../static/svg/divide.svg" />
        </el-tooltip>
      </div>
    </div>
    <el-scrollbar class="box-scrollbar" :style="rainy?'color:#ddd':'color:#333'">
      <router-view />
    </el-scrollbar>
    <!-- 卡密哒！ -->
    <Live2d :theme="theme" :dialogText="dialogText" :dialogShow="dialogShow"></Live2d>
    <!-- 雨，也因为雨，所有同级标签需要加上position:fixed;此后有空可以优化，两极反转 -->
    <Rain v-show="rainy" style="pointer-events: none;"></Rain>
  </div>
</template>

<script>
import Live2d from "@/components/live2d";
import Rain from "@/components/rain";
export default {
  name: "Home",
  components: {
    Live2d,
    Rain
  },
  data() {
    return {
      icon: [
        {
          title: "天气",
          methods: "changeWeather",
          src: "../../static/svg/rainy.svg",
          dialogText: ""
        },
        {
          title: "主页",
          methods: "toHome",
          src: "../../static/svg/home.svg",
          dialogText: "欢迎回到主页，我可不会帮你寻觅知识ヾ(•ω•`)o"
        },
        {
          title: "知识",
          methods: "toKnowledge",
          src: "../../static/svg/toKnowledge.svg",
          dialogText: "可恶，我最珍贵的财富才不会分享给你(っ °Д °;)っ"
        },
        {
          title: "随笔",
          methods: "toInformalEssay",
          src: "../../static/svg/informalEssay.svg",
          dialogText: "就算是我，也无法让内心平静(。・・)"
        },
        {
          title: "实验室",
          methods: "toLab",
          src: "../../static/svg/lab.svg",
          dialogText: "颤栗吧！为我所展示的力量！( ‵▽′)ψ"
        },
        {
          title: "┃"
        },
        {
          title: "QQ",
          methods: "toQQ",
          src: "../../static/svg/qq.svg",
          dialogText: "被抓到了...但这，会不会是假的呢(→_→)"
        },
        {
          title: "微信",
          methods: "toWeChat",
          src: "../../static/svg/weChat.svg",
          dialogText: "唔...我感受到了注视(°ー°〃)"
        },
        {
          title: "GitHub",
          methods: "toGitHub",
          src: "../../static/svg/gitHub.svg",
          dialogText: "这是我不知道多少代的后裔吗(/▽＼)"
        },
        {
          title: "bilibili",
          methods: "toBilibili",
          src: "../../static/svg/bilibili.svg",
          dialogText: "bilibili干杯!( ゜- ゜)つロ"
        }
      ],
      dialogText: "",
      dialogShow: false,
      rainy: true,
      theme: "dark"
    };
    var timer;
  },
  methods: {
    dialog(text) {
      clearTimeout(this.timer);
      this.dialogText = text;
      this.dialogShow = false;
      this.dialogShow = true;

      this.timer = setTimeout(() => {
        return (this.dialogShow = false);
      }, 3000);
    },
    toPage(name) {
      let data = this.icon.filter(t => t.title == name)[0];
      if (data.methods == "changeWeather") {
        this.changeWeather();
      } else {
        this.dialog(data.dialogText);
      }
    },
    //天气控制，目前就sunny和rainy,这块不打算做太复杂，预计再加上雪景和枫叶，其次高斯模糊背景图也需要跟着变换
    changeWeather() {
      // let num = Math.random() * 2 - 1;
      if (this.rainy) {
        this.theme = "light";
        this.dialog("要有光！☀");
        this.icon[0].src = "../../static/svg/sunflag.svg";
        this.rainy = false;
        this.$refs.home.classList.remove("sunny-rainy");
        this.$refs.home.classList.add("rainy-sunny");
      } else {
        this.theme = "dark";
        this.dialog("淅淅沥沥~~淅淅沥沥~~🌧");
        this.icon[0].src = "../../static/svg/rainy.svg";
        this.rainy = true;
        this.$refs.home.classList.remove("rainy-sunny");
        this.$refs.home.classList.add("sunny-rainy");
      }
    }
  },
  computed: {},
  created() {
    var self = this;
    document.onkeydown = function(e) {
      let onEvent = window.event;
      // console.log(onEvent.keyCode);
      //开发者工具
      if (
        onEvent.keyCode == 123 ||
        (onEvent.keyCode == 67 && onEvent.ctrlKey && onEvent.shiftKey)
      ) {
        self.dialog("凡人止步！这里是神之领域！(╯▔皿▔)╯");
      }
      //复制
      if (onEvent.keyCode == 67 && onEvent.ctrlKey) {
        self.dialog("这份力量，来自我的赠与( ´･･)ﾉ(._.`)");
      }
    };
  }
};
</script>

<style scoped>
#home {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.7);
}

.rainy-sunny {
  animation: rainy-sunny 1s linear infinite forwards;
  animation-iteration-count: 1;
}
@keyframes rainy-sunny {
  0% {
    background: rgba(0, 0, 0, 0.7);
  }
  100% {
    background: rgba(255, 255, 255, 1);
  }
}

.sunny-rainy {
  animation: sunny-rainy 1s linear infinite forwards;
  animation-iteration-count: 1;
}
@keyframes sunny-rainy {
  0% {
    background: rgba(255, 255, 255, 1);
  }
  100% {
    background: rgba(0, 0, 0, 0.7);
  }
}

#bg {
  position: fixed;
  width: 100%;
  height: 100%;
  /* background: #fff; */
  background-image: url("../../static/img/headerbg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
  filter: blur(5px);
}

.title {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.weather {
  margin-right: 2rem;
}
.weather:hover {
  filter: brightness(125%);
}

.title-text {
  float: left;
  pointer-events: none;
  font-size: 2rem;
  line-height: 5rem;
  margin: 0;
  padding-left: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon-social {
  display: flex;
  float: right;
}

.icon {
  margin-right: 1rem;
}
.icon:hover {
  filter: brightness(75%);
}

.box-scrollbar {
  position: fixed;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  transform: translate(-50%, 0);
  left: 50%;
  top: 6rem;
  color: #ddd;
  /* height: clac(100% - 6rem); */
  /* width: 60%; */
}
</style>
