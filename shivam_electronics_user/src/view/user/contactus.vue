<template>
  <div>
    <userHead></userHead>

    <div id="mainBody">
      <div class="container">
        <h1>Visit us</h1>
        <hr class="soften" />
        <div class="row">
          <div class="span4">
            <h4>Contact Details</h4>
            <p>
              Shivam Electronics
              <br />10-11, Jay Javan Jay Kishan,
              <br />Bamroli,
              <br />Surat, Gujarat 394210
              <br />
              <br />
              <br />shivamelectronics7757@gmail.com
              <br />Mo: 9099928292
              <br />
            </p>
          </div>

          <div class="span4">
            <h4>Opening Hours</h4>
            <h5>Monday - Sunday</h5>
            <p>
              10:00am - 09:00pm
              <br />
              <br />
            </p>
          </div>
          <div class="span4">
            <h4>Email Us</h4>

            <form
              class="form-horizontal"
              method="GET"
              :action="'mailto:shivamelectronics7757@gmail.com'"
              enctype="text/plain"
            >
              <fieldset>
                <div class="control-group">
                  <input type="text" name="subject" placeholder="Subject" class="input-xlarge" />
                </div>
                <div class="control-group">
                  <textarea
                    rows="3"
                    id="textarea"
                    class="input-xlarge"
                    name="body"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button class="btn btn-primary" name="btnsubmit" type="submit">Compose</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="span12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.102874429061!2d72.83158271493461!3d21.148303885933743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051deaaa64827%3A0x262f968acee409b0!2sShiv%20vision!5e0!3m2!1sen!2sin!4v1585742557256!5m2!1sen!2sin"
              height="450"
              frameborder="0"
              style="border:0; width : 100%;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <userFooter></userFooter>
  </div>
</template>

<script>
import pro1 from "../../services/user/profile_service";

export default {
  data() {
    return {};
  },
  methods: {},

  beforeMount() {}
};
</script>
    

<style scoped>
</style>
        

