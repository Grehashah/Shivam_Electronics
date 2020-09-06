<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="header">
            <h2>Invoice Details</h2>
          </div>
          <div class="body">
            <div class="row clearfix">
              <div class="col-sm-12">
                <div v-if="invoiceFlag === 1" class="form-group">
                  <div class="form-line">
                    <form enctype="multipart/form-data" @submit.prevent="sendFile">
                      Upload Invoice in pdf format :
                      <br />
                      <br />
                      <input type="file" ref="file" @change="selectedFile" />
                      <br />
                      <button class="btn btn-primary waves-effect">Upload</button>
                    </form>
                  </div>
                </div>
                <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                <div v-if="invoiceFlag !== 1" class="form-group">
                  <div class="form-line">Invoice is already uploaded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import manage from "../../services/admin/manageOrders";

export default {
  data() {
    return {
      error: "",
      invoice: "",
      invoiceFlag: 0,
      status: "",
      file: "",
      uploadStatus: 0,
      image: ""
    };
  },
  methods: {
    selectedFile() {
      this.file = this.$refs.file.files[0];
    },
    getOrderDetails(data1) {
      const data = {
        orderid: data1
      };
      manage
        .orderDetails(data)
        .then(res => {
          let response = res.data;
          this.invoice = response[0].Invoice;
          this.status = response[0].Status;

          if (this.invoice !== null) {
            this.invoiceFlag = 0;
          } else {
            if (this.status === 2) {
              this.invoiceFlag = 1;
            }
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadInvoice(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.image = response.name;
            const data = {
              id: this.$route.params.id,
              invoice: this.image
            };
            manage
              .updateInvoice(data)
              .then(res => {
                let response1 = res.data;

                if (response1.result === 1) {
                  this.error = "Invoice Uploaded";
                } else {
                  this.error = "Error occured!!!";
                }
              })
              .catch(err => {
                this.error = "Something Went Wrong!!!";
              });
          } else {
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    }
  },
  beforeMount() {
    if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
      this.getOrderDetails(this.$route.params.id);
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

