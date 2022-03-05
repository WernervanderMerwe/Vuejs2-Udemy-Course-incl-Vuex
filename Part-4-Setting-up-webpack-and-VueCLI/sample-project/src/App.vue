<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <announcement></announcement>
        <app-article></app-article>
        <hr />
        <app-contact>
          <p>Some Content</p>
          <p slot="top">
            Contact us and one of our representatives will get back to you as
            soon as possible
          </p>
          <p slot="bottom">Please don't submit any sensitive information</p>
        </app-contact>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
