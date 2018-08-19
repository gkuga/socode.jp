<template>
  <div>
  <h1>爽コード</h1>
  <hr>
  <div class="marquee">
    <p>ようこそ爽コードへ</p>
  </div>
  </div>
</template>

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
