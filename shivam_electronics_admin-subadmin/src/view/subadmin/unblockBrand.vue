<template>
  <div></div>
</template>

<script>
import manage from "../../services/admin/manageBrands_service";

export default {
  data() {
    return {
      brandID: ""
    };
  },
  methods: {
    retrieveDetails(id) {
      const data = {
        brandID: id
      };
      manage
        .unblockBrand(data)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.fan(this.brandID);
            this.fridge(this.brandID);
            this.mobile(this.brandID);
            this.flourmil(this.brandID);
            this.iron(this.brandID);
            this.mixer(this.brandID);
            this.oven(this.brandID);
            this.speaker(this.brandID);
            this.tv(this.brandID);
            this.wm(this.brandID);
            this.wp(this.brandID);
            this.$router.push("/subadmin/manageBrands");
          }
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    },
    fridge(id) {
      const data = {
        brandID: id
      };
      manage
        .getFridge(data)
        .then(res => {
          let response = res.data;
          if (response.length !== 0) {
            manage.updateFridgeStatus2(data).then(res => {
              let response = res.data;
            });
          }
        })
        .catch(err => {});
    },
    mobile(id) {
      const data = {
        brandID: id
      };

      manage
        .getMobile(data)
        .then(res => {
          let response = res.data;

          if (response.length !== 0) {
            manage
              .updateMobileStatus2(data)
              .then(res => {
                let response = res.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    flourmil(id) {
      const data = {
        brandID: id
      };

      manage
        .getFlourmil(data)
        .then(res => {
          let response = res.data;

          if (response.length !== 0) {
            manage
              .updateFlourmilStatus2(data)
              .then(res => {
                let response = res.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    fan(id) {
      const data = {
        brandID: id
      };

      manage
        .getFan(data)
        .then(res => {
          let response = res.data;

          if (response.length !== 0) {
            manage
              .updateFanStatus2(data)
              .then(res => {
                let response = res.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    iron(id) {
      const data = {
        brandID: id
      };

      manage
        .getIron(data)
        .then(res => {
          let response = res.data;

          if (response.length !== 0) {
            manage
              .updateIronStatus2(data)
              .then(res => {
                let response = res.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    mixer(id) {
      const data = {
        brandID: id
      };

      manage
        .getMixer(data)
        .then(res => {
          let response = res.data;

          if (response.length !== 0) {
            manage
              .updateMixerStatus2(data)
              .then(res => {
                let response = res.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    oven(id) {
      const data = {
        brandID: id
      };

      manage
        .getOven(data)
        .then(res => {
          let response = res.data;

          if (response.length !== 0) {
            manage
              .updateOvenStatus2(data)
              .then(res => {
                let response = res.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    speaker(id) {
      const data = {
        brandID: id
      };

      manage
        .getSpeaker(data)
        .then(res => {
          let response = res.data;

          if (response.length !== 0) {
            manage
              .updateSpeakerStatus2(data)
              .then(res => {
                let response = res.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    tv(id) {
      const data = {
        brandID: id
      };

      manage
        .getTV(data)
        .then(res => {
          let response = res.data;

          if (response.length !== 0) {
            manage
              .updateTVStatus2(data)
              .then(res => {
                let response = res.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    wm(id) {
      const data = {
        brandID: id
      };

      manage
        .getWM(data)
        .then(res => {
          let response = res.data;

          if (response.length !== 0) {
            manage
              .updateWMStatus2(data)
              .then(res => {
                let response = res.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    wp(id) {
      const data = {
        brandID: id
      };

      manage
        .getWP(data)
        .then(res => {
          let response = res.data;

          if (response.length !== 0) {
            manage
              .updateWPStatus2(data)
              .then(res => {
                let response = res.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    }
  },
  beforeMount() {
    if (this.$session.has("admin-email") === true) {
      this.$router.push("*");
    } else if (this.$session.has("subadmin-email") === true) {
      this.brandID = this.$route.params.brandID;
      this.retrieveDetails(this.brandID);
    } else {
      this.$router.push("/subadmin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

