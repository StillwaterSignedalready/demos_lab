<template>
  <div class="container">
    <form action="" class="form-signin">
      <h2 class="form-signin-heading">{{title}}</h2>
      <label for="" class="sr-only">邮件地址</label>
      <input type="text" class="form-control">
      <label for="" class="sr-only">密码</label>
      <input type="text" class="form-control">
      <div class="checkbox">
        <label for="">
          <input type="text">
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block">登录</button>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title: '登陆'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
