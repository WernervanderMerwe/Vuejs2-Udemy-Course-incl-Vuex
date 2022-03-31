<template>
  <div style="margin-top: 200px; margin-left: 200px; flex">
    <button class="btn btn-primary" @click="show1 = !show1">Toggle</button>

    <transition name="fade">
      <p v-if="show1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
        sunt minus temporibus mollitia, vitae tenetur amet culpa odit ratione
        voluptatum, et veritatis, excepturi quos? Porro velit neque hic optio!
      </p>
    </transition>

    <button class="btn btn-primary" @click="show2 = !show2">Toggle</button>

    <transition
      enter-active-class="animate__animated animate__pulse slow"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <p v-if="show2" style="width: 200px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed
        sunt minus temporibus mollitia, vitae tenetur amet culpa odit ratione
        voluptatum, et veritatis, excepturi quos? Porro velit neque hic optio!
      </p>
    </transition>

    <button class="btn btn-primary" @click="show3 = !show3">Toggle</button>

    <transition>
      <p v-if="show3" style="width: 200px">
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
      show1: false,
      show2: false,
      show3: false,
    };
  },
};
</script>

<style>
.v-enter-active {
  animation: pulse 1s;
}

.v-leave-active {
  animation: fade-out 1s;
}

@keyframes fade-out {
  from {
    opacity: 1;
    transition: opacity;
  }

  to {
    opacity: 0;
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}

.slow {
  animation-duration: 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>
