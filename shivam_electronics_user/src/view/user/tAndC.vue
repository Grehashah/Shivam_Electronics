<template>
  <div>
    <div id="mainBody">
      <div class="container">
        <div class="row">
          <div>
            <h3>Terms and Conditions</h3>
            <hr class="soft" />
            <p>Please read these terms and conditions carefully before using our website operated by us.</p>
            <br />
            <h4>Conditions of Use</h4>
            <br />
            <p>We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.</p>
            <br />
            <h4>Communications</h4>
            <br />
            <p>The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. You are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails.</p>
            <br />
            <h4>Comments, Reviews, and Emails</h4>
            <br />
            <p>
              Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. Content has to be free of software viruses, political campaigns, and commercial solicitation.
              We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you have right to use, reproduce, publish, modify such content throughout the world in any media.
            </p>
            <br />
            <h4>License and Site Access</h4>
            <br />
            <p>We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.</p>
            <br />
            <h4>User Account</h4>
            <br />
            <p>
              If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.
              We reserve all rights to terminate accounts, edit or remove content and cancel orders in their sole discretion.
            </p>
            <br />
            <h4>No Liability</h4>
            <br />
            <p>SUBJECT TO APPLICABLE LAW, INCLUDING WITH RESPECT TO LIABILITY FOR PERSONAL INJURY OR NON-WAIVABLE STATUTORY RIGHTS, IN NO EVENT SHALL SHIVAM ELECTRONICS OR ITS SHOPKEEPERS, EMPLOYEES BE LIABLE TO THE USER WITH RESPECT TO USE OF THE SITES, THE CONTENT OR THE MATERIALS CONTAINED IN OR ACCESSED THROUGH THE SITES (INCLUDING WITHOUT LIMITATION ANY DAMAGES CAUSED BY OR RESULTING FROM RELIANCE BY A USER ON ANY INFORMATION OBTAINED FROM SHIVAM ELECTRONICS), OR ANY DAMAGES THAT RESULT FROM MISTAKES, OMISSIONS, INTERRUPTIONS, DELETION OF FILES OR EMAIL, ERRORS, DEFECTS, VIRUSES, DELAYS IN OPERATION OR TRANSMISSION OR ANY FAILURE OF PERFORMANCE, WHETHER OR NOT RESULTING FROM ACTS OF GOD, COMMUNICATIONS FAILURES, THEFT, DESTRUCTION, FRAUD, OR UNAUTHORIZED ACCESS TO SHIVAM ELECTRONICS'S RECORDS, PROGRAMS OR SERVICES; AND BE LIABLE TO THE USER FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF GOODWILL, LOST PROFITS, LOSS, THEFT OR CORRUPTION OF USER INFORMATION, OR THE INABILITY TO USE THE SITES OR ANY OF THEIR FEATURES. THE USER’S SOLE REMEDY IS TO CEASE USE OF THE SITES.</p>
            <br />
            <h4>Cancellation of Orders</h4>
            <br />
            <p>If you want to cancel or reject your order then you have to do it before the Invoice of your order is generated , once the Invoice will be generated afterwards you are not allowed to cancel your order . If you cancel or reject your order before Invoice of your order is generated then you will get your refund within 1 week.</p>
            <br />

            <button @click="back()" class="btn btn-primary">
              <i class="icon-arrow-left"></i> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      back()
      {
          this.$router.push("/sign-up");
      }
  },

  beforeMount() {}
};
</script>
    

<style scoped>
</style>
        

