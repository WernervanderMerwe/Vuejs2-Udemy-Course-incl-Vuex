<template>
  <div>
    <h2>Contact Us</h2>
    <slot name="top"></slot>

    <form>
      <div class="form-group">
        <label for="yourName">Your Name</label>
        <input
          type="text"
          class="form-control"
          id="yourName"
          placeholder="Enter Your name"
        />
      </div>

      <div class="form-group">
        <label for="emailAddress">E-mail address</label>
        <input
          type="email"
          class="form-control"
          id="emailAddress"
          placeholder="Enter Your E-mail Address"
        />
      </div>

      <slot></slot>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          type="message"
          cols="30"
          rows="10"
          class="form-control"
          placeholder="Enter Your Message"
        ></textarea>
      </div>

      <slot name="bottom">
        <p>We will respond within 2 business days.</p>
      </slot>

      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>
