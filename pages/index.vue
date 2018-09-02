<template>
  <div>
  <h1>爽コード</h1>
  <hr>
  <div class="marquee">
    <p>ようこそ爽コードへ</p>
  </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$axios.$get('https://2t7ldc58u9.execute-api.ap-northeast-1.amazonaws.com/test').then(response => (console.log(response)));
  }
}
</script>

<style>
.marquee {
  background:aliceblue;
  overflow:hidden;
  margin:1em 0;
}

.marquee p {
  margin:0;
  padding-left:100%;
  display:inline-block;
  white-space:nowrap;
  animation-name:marquee;
  animation-duration:10s;
    animation-timing-function:linear;
    animation-iteration-count:infinite;
}

@keyframes marquee {
  from { transform:translate(0);     }
  to   { transform:translate(-100%); }
}
</style>
