<template>
  <!-- <div>
    <div class="box">
      <h1>这里是第一条博客</h1>
      <p>一切从此开始...</p>
    </div>
  </div>-->
  <div>
    <div class="markdown">
      <div class="container">
        <mavon-editor
          v-model="content"
          ref="md"
          @imgAdd="$imgAdd"
          @change="change"
          style="height: 600px"
        />
        <el-button @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>
 <script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  // data() {
  //   return {};
  // },
  // props: {},
  // methods: {}

  name: "",
  props: [],
  // 注册
  components: {
    mavonEditor
  },
  data() {
    return {
      content: "", // 输入的markdown
      html: "", // 及时转的html
      configs: {}
    };
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file) {
      let formdata = new FormData();
      this.$upload
        .post("/上传接口地址", formdata)
        .then(res => {
          console.log(res.data);
          this.$refs.md.$img2Url(pos, res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交
    submit() {
      console.log(this.content);
      console.log(this.html);
      this.$message.success("提交成功，已打印至控制台！");
    }
  },
  mounted() {}
};
</script>
 <style scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>