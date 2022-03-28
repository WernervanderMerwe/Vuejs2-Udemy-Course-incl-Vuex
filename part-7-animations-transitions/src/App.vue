<template>
  <div style="margin-top: 200px">
    <button class="btn btn-primary" @click="show = !show">Toggle</button>

    <transition>
      <p v-if="show">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
        sunt minus temporibus mollitia, vitae tenetur amet culpa odit ratione
        voluptatum, et veritatis, excepturi quos? Porro velit neque hic optio!
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}
</style>
