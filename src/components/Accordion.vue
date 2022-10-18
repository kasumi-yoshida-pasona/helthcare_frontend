<script setup></script>

<template>
  <section class="accordion">
    <input id="block-01" type="checkbox" class="toggle" />
    <label class="Label" for="block-01">タイトル１</label>
    <div class="content">
      <p>デプロイテスト完了</p>
    </div>
    <input id="block-02" type="checkbox" class="toggle" />
    <label class="Label" for="block-02">タイトル２</label>
    <div class="content">
      <p>
        ここにお知らせ本文が入りますー<br />
        ここにお知らせ本文が入りますー<br />
        ここにお知らせ本文が入りますー<br />
        ここにお知らせ本文が入りますー<br />
        ここにお知らせ本文が入りますー<br />
        ここにお知らせ本文が入りますー
      </p>
    </div>
    <input id="block-03" type="checkbox" class="toggle" />
    <label class="Label" for="block-03">タイトル３</label>
    <div class="content">
      <p>
        ここにお知らせ本文が入りますーここにお知らせ本文が入りますーここにお知らせ本文が入りますーここにお知らせ本文が入りますーここにお知らせ本文が入りますーここにお知らせ本文が入りますーここにお知らせ本文が入りますー
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
/*ベース*/
.toggle {
  display: none;
}
.Label {
  /*タイトル*/
  padding: 1em;
  display: block;
  color: #fff;
  background: #019ac6;
}
.Label::before {
  /*タイトル横の矢印*/
  content: "";
  width: 6px;
  height: 6px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  -webkit-transform: rotate(45deg);
  position: absolute;
  top: calc(50% - 3px);
  right: 20px;
  transform: rotate(135deg);
}
.Label,
.content {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.3s;
}
.content {
  /*本文*/
  height: 0;
  margin-bottom: 10px;
  padding: 0 20px;
  overflow: hidden;
}
.toggle:checked + .Label + .content {
  /*開閉時*/
  height: auto;
  padding: 20px;
  transition: all 0.3s;
}
.toggle:checked + .Label::before {
  transform: rotate(-45deg) !important;
}
</style>
