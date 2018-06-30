<template>
  <div class="hello">
    <h3>海豚新零售后台管理系统</h3>
    <form class="form" action="">
      <el-input class="num" placeholder="请输入您的账号" clearable></el-input>
      <el-input class="pass" placeholder="请输入您的密码" clearable></el-input>
      <router-link to="./HelloWorld">
        <el-button class="btn" type="primary">登录</el-button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hello {
  width: 400px;
  height: 270px;
  position: absolute;
  top: -100px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.num {
  margin-bottom: 20px
}

.btn {
  width: 100%;
  margin-top: 20px
}
</style>
