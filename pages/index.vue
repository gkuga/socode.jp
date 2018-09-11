<template>
  <div>
    <section>
      <h1>爽コード</h1>
      <hr>
      <div class="marquee">
        <p>ようこそ爽コードへ</p>
      </div>
      <hr>
      あなたは
      <Counter
        class="counter"
        v-bind:access_count="access_count"
        v-bind:counter_length="counter_length"
      />
      人目のお客様です。
    </section>
    <nav>
      <ul>
        <li><a href="https://gkuga.hatenablog.com/">週刊便代</a></li>
        <li><a href="https://twitter.com/gkuga">トゥイッター</a></li>
        <li class="comming-soon">github1</li>
        <li class="comming-soon">github2</li>
        <li class="comming-soon">qiita1</li>
        <li class="comming-soon">qiita2</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Counter from '~/components/Counter.vue'

export default {
  components: {
    Counter
  },
  data: function () {
    return {
      access_count: 0,
      counter_length: 6
    }
  },
  beforeCreate () {
    this.$axios.$get('https://2t7ldc58u9.execute-api.ap-northeast-1.amazonaws.com/prod').then(response => {this.access_count=response.access_count});
  }
}
</script>

<style>
.counter {
  font-family: 'Russo One', sans-serif;
}

.comming-soon {
  text-decoration: line-through;
}

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
