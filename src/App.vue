<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow: hidden;
}
@font-face {
  font-family: "egfont";
  font-display: swap;
  src: url("../static/font/webfont.eot"); /* IE9 */
  src: url("../static/font/webfont.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("../static/font/webfont.woff2") format("woff2"),
    url("../static/font/webfont.woff") format("woff"),
    /* chrome、firefox */ url("../static/font/webfont.ttf") format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url("../static/font/webfont.svg#webfont") format("svg"); /* iOS 4.1- */
}
.eg-font {
  font-family: "egfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'chfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_ph70jbjvgh.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_ph70jbjvgh.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/webfont_ph70jbjvgh.woff2') format('woff2'),
  url('//at.alicdn.com/t/webfont_ph70jbjvgh.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/webfont_ph70jbjvgh.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/webfont_ph70jbjvgh.svg#AlibabaPuHuiTiL') format('svg'); /* iOS 4.1- */
}
.ch-font {
  font-family: "chfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
