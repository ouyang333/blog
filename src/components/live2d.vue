<template>
  <div>
    <!-- <img class="svgGif" src="../../static/svg/sunflag.svg" /> -->
    <el-tooltip
      class="item"
      :effect="theme"
      :content="dialogText"
      placement="bottom"
      :value="dialogShow"
      :manual="true"
    >
      <div class="dialog"></div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  props: {
    theme: {
      type: String,
      default: "dark"
    },
    dialogText: {
      type: String,
      default: ""
    },
    dialogShow: {
      type: Boolean,
      default: false
    }
  },
  created() {
    setTimeout(() => {
      window.L2Dwidget.init(
        {
          pluginRootPath: "static/live2d/",
          pluginJsPath: "lib/",
          pluginModelPath: "live2d-widget-model-hijiki/assets/",
          tagMode: false,
          debug: false,
          model: {
            jsonPath:
              "/static/live2d/live2d-widget-model-hijiki/assets/hijiki.model.json"
          },
          display: { position: "left", width: 150, height: 300 },
          mobile: { show: false },
          log: false
        },
        500
      );
    });
  }
};
</script>

<style scoped>
.dialog {
  width: 150px;
  height: 160px;
  position: absolute;
  bottom: 40px;
  pointer-events: none;
}

.svgGif{
  position: absolute;
  pointer-events: none;
  bottom:200px;
  left:35px;
}
</style>
