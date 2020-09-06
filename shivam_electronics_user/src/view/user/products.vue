<template>
  <div>
    <userHead></userHead>

    <div id="mainBody">
      <div class="container">
        <div class="row">
          <userSidebar></userSidebar>

          <div class="span9">
            <ul class="breadcrumb">
              <li>
                <a href="/">Home</a>
                <span class="divider">/</span>
              </li>
              <li class="active">{{ category }}</li>
            </ul>
            <h3>
              {{ category }}
              <small class="pull-right">{{ totalItems }} products are available</small>
            </h3>
            <hr class="soft" />
            <h5>Filter By</h5>
            <form class="form-horizontal">
              <select v-model="brandID">
                <option value disabled selected hidden>Choose Brand</option>
                <option
                  v-for="(brand,index) in brands"
                  :value="brand.BrandID"
                  :key="index"
                >{{ brand.Name }}</option>
              </select>
              &nbsp;&nbsp;
              <select v-model="ratings">
                <option value disabled selected hidden>Choose Ratings</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              &nbsp;&nbsp;
              <span>
                <b>Price :</b>
              </span>

              <input
                type="text"
                class="span1"
                placeholder="₹ Min"
                v-model="minPrice"
                @keypress="cno1"
              />
              <input
                type="text"
                class="span1"
                placeholder="₹ Max"
                v-model="maxPrice"
                @keypress="cno1"
              />
              &nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-success"
                @click="GO()"
              >GO</button>

              <span class="pull-right">
                <button class="btn btn-primary" @click="all()">All</button>
              </span>
            </form>
            <hr class="soft" />

            <br class="clr" />
            <div class="tab-content" v-if="category === 'mobile'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.MobileID">
                          <img
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.MobileID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
            <div class="tab-content" v-else-if="category === 'fan'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.FanID">
                          <img
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.FanID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
            <div class="tab-content" v-else-if="category === 'fridge'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.FridgeID">
                          <img
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.FridgeID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
            <div class="tab-content" v-else-if="category === 'washingmachine'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.WashingMachineID">
                          <img
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.WashingMachineID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
            <div class="tab-content" v-else-if="category === 'waterpurifier'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.WaterPurifierID">
                          <img
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.WaterPurifierID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
            <div class="tab-content" v-else-if="category === 'mixer'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.MixerID">
                          <img
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.MixerID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
            <div class="tab-content" v-else-if="category === 'speaker'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.SpeakerID">
                          <img
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.SpeakerID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
            <div class="tab-content" v-else-if="category === 'flourmil'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.FlourmilID">
                          <img
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.FlourmilID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
            <div class="tab-content" v-else-if="category === 'iron'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.IronID">
                          <img
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.IronID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
            <div class="tab-content" v-else-if="category === 'oven'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.OvenID">
                          <img
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.OvenID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
            <div class="tab-content" v-else-if="category === 'tv'">
              <div class="tab-pane active" id="blockView">
                <ul class="thumbnails">
                  <li class="span3" v-for="(product,index) in products" :key="index">
                    <div class="thumbnail">
                      <div style="height: 220px; width: 260px;  margin: auto;">
                        <a :href="'/products/' + category + '/' + product.TVID">
                          <img
                            :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + category + '/' + product.Image"
                            style="width: 100%; height: 100%; object-fit: scale-down;"
                            alt
                          />
                        </a>
                      </div>
                      <div class="caption">
                        <h5>{{ product.Name + " " + product.Model }}</h5>
                        <h4>
                          <a
                            class="btn btn-info"
                            :href="'/products/' + category + '/' + product.TVID"
                          >VIEW</a>
                          <span class="pull-right">₹ {{ product.Price }}</span>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr class="soft" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <userFooter></userFooter>
  </div>
</template>

<script>
import manage from "../../services/user/products_service";

export default {
  data() {
    return {
      category: "",
      totalItems: 0,
      products: [],
      brands: [],
      brandID: "",
      ratings: "",
      minPrice: "",
      maxPrice: ""
    };
  },
  methods: {
    all() {
      this.$router.go();
    },
    cno1(event) {
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        return true;
      } else {
        return event.preventDefault();
      }
    },
    GO() {
      let bid1 = this.brandID;
      let ratings1 = this.ratings;
      let min1 = this.minPrice;
      let max1 = this.maxPrice;

      if (bid1 === "") {
        bid1 = "^[0-9]+$";
      } else {
        bid1 = "[[:<:]]" + bid1 + "[[:>:]]";
      }

      if (ratings1 === "") {
        ratings1 = "^[0-9]+$";
      } else {
        ratings1 = "[[:<:]]" + ratings1 + "[[:>:]]";
      }

      if (min1 === "") {
        min1 = -1;
      }
      if (max1 === "") {
        max1 = 2147483648;
      }

      const data = {
        min: min1,
        max: max1,
        rate: ratings1,
        bid: bid1
      };

      if (this.category === "mobile") {
        manage
          .getFilteredMobile(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.category === "fan") {
        manage
          .getFilteredFan(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.category === "fridge") {
        manage
          .getFilteredFridge(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.category === "flourmil") {
        manage
          .getFilteredFlourmil(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.category === "speaker") {
        manage
          .getFilteredSpeaker(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.category === "washingmachine") {
        manage
          .getFilteredWashingMachine(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.category === "tv") {
        manage
          .getFilteredTV(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.category === "mixer") {
        manage
          .getFilteredMixer(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.category === "waterpurifier") {
        manage
          .getFilteredWaterPurifier(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.category === "iron") {
        manage
          .getFilteredIron(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.category === "oven") {
        manage
          .getFilteredOven(data)
          .then(res => {
            this.products = res.data;
            this.totalItems = res.data.length;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      }
    }
  },
  beforeMount() {
    this.category = this.$route.params.category;

    manage
      .getBrands()
      .then(res => {
        this.brands = res.data;
      })
      .catch(err => {
        this.error = "Something Went Wrong!!!";
      });

    if (this.category === "fan") {
      manage
        .getFan()
        .then(res => {
          this.totalItems = res.data.length;
          this.products = res.data;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else if (this.category === "mobile") {
      manage
        .getMobile()
        .then(res => {
          this.products = res.data;
          this.totalItems = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else if (this.category === "fridge") {
      manage
        .getFridge()
        .then(res => {
          this.products = res.data;
          this.totalItems = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else if (this.category === "washingmachine") {
      manage
        .getWM()
        .then(res => {
          this.products = res.data;
          this.totalItems = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else if (this.category === "waterpurifier") {
      manage
        .getWP()
        .then(res => {
          this.products = res.data;
          this.totalItems = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else if (this.category === "mixer") {
      manage
        .getMixer()
        .then(res => {
          this.products = res.data;
          this.totalItems = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else if (this.category === "iron") {
      manage
        .getIron()
        .then(res => {
          this.products = res.data;
          this.totalItems = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else if (this.category === "oven") {
      manage
        .getOven()
        .then(res => {
          this.products = res.data;
          this.totalItems = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else if (this.category === "tv") {
      manage
        .getTV()
        .then(res => {
          this.products = res.data;
          this.totalItems = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else if (this.category === "flourmil") {
      manage
        .getFlourmil()
        .then(res => {
          this.products = res.data;
          this.totalItems = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    } else if (this.category === "speaker") {
      manage
        .getSpeaker()
        .then(res => {
          this.products = res.data;
          this.totalItems = res.data.length;
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    }
  }
};
</script>

<style scoped>
</style>
