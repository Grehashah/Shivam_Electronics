<template>
  <div>
    <userHead></userHead>

    <div id="carouselBlk">
      <div id="myCarousel" class="carousel slide">
        <div class="carousel-inner">
          <div class="item active">
            <div class="container">
              <a href="/sign-up">
                <img style="width:100%" src="../../assets/images/carousel/2.png" alt />
              </a>
              <div class="carousel-caption">
                <h4>Second Thumbnail label</h4>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="container">
              <a href="/sign-up">
                <img src="../../assets/images/carousel/3.png" alt />
              </a>
              <div class="carousel-caption">
                <h4>Second Thumbnail label</h4>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="container">
              <a href="/sign-up">
                <img src="../../assets/images/carousel/4.png" alt />
              </a>
              <div class="carousel-caption">
                <h4>Second Thumbnail label</h4>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="container">
              <a href="/sign-up">
                <img src="../../assets/images/carousel/5.png" alt />
              </a>
              <div class="carousel-caption">
                <h4>Second Thumbnail label</h4>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="container">
              <a href="/sign-up">
                <img src="../../assets/images/carousel/6.png" alt />
              </a>
              <div class="carousel-caption">
                <h4>Second Thumbnail label</h4>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="container">
              <a href="/sign-up">
                <img src="../../assets/images/carousel/7.png" alt />
              </a>
              <div class="carousel-caption">
                <h4>Second Thumbnail label</h4>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </div>
            </div>
          </div>
        </div>
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
      </div>
    </div>

    <div id="mainBody" class="bg">
      <div class="container">
        <div class="row">
          <userSidebar></userSidebar>

          <div class="span9">
            <div class="well well-small">
              <h4>
                Brands
                <small class="pull-right">Brands You Love To Buy</small>
              </h4>
              <div class="row-fluid">
                <div id="categories" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="item active">
                      <ul class="thumbnails">
                        <li class="span3">
                          <div class="thumbnail">
                            <img src="../../assets/images/products/b1.jpg" alt />
                          </div>
                        </li>
                        <li class="span3">
                          <div class="thumbnail">
                            <img src="../../assets/images/products/b2.jpg" alt />
                          </div>
                        </li>
                        <li class="span3">
                          <div class="thumbnail">
                            <img src="../../assets/images/products/b3.jpg" alt />
                          </div>
                        </li>
                        <li class="span3">
                          <div class="thumbnail">
                            <img src="../../assets/images/products/b4.jpg" alt />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="item">
                      <ul class="thumbnails">
                        <li class="span3">
                          <div class="thumbnail">
                            <img src="../../assets/images/products/b5.jpg" alt />
                          </div>
                        </li>
                        <li class="span3">
                          <div class="thumbnail">
                            <img src="../../assets/images/products/b6.jpg" alt />
                          </div>
                        </li>
                        <li class="span3">
                          <div class="thumbnail">
                            <img src="../../assets/images/products/b7.jpg" alt />
                          </div>
                        </li>
                        <li class="span3">
                          <div class="thumbnail">
                            <img src="../../assets/images/products/b8.jpg" alt />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a class="left carousel-control" href="#categories" data-slide="prev">‹</a>
                  <a class="right carousel-control" href="#categories" data-slide="next">›</a>
                </div>
              </div>
            </div>
            <div v-if="stdError === 1">
              <h4>Recently Sold Products</h4>
              <ul class="thumbnails">
                <li class="span3" v-for="(product,index) in finalProducts" :key="index">
                  <div class="thumbnail">
                    <div style="height: 220px; width: 260px;  margin: auto;">
                      <a :href="'/products/' + product.category + '/' + product.ProductID">
                        <img
                          :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + product.category + '/' + product.Image"
                          style="width: 100%; height: 100%; object-fit: scale-down;"
                        />
                      </a>
                    </div>
                    <div class="caption">
                      <h5>{{ product.Name + " " + product.Model }}</h5>
                      <h4>
                        <a
                          class="btn btn-info"
                          :href="'/products/' + product.category + '/' + product.ProductID"
                        >VIEW</a>
                        <span class="pull-right">₹ {{ product.Price }}</span>
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <userFooter></userFooter>
    </div>
  </div>
</template>

<script>
import userSetup1 from "../../services/user/userSetup_service";
import manage from "../../services/admin/manageProduct";

export default {
  data() {
    return {
      latestProducts: [],
      error: "",
      stdError: 0,
      finalProducts: [],
      productID: ""
    };
  },
  methods: {},
  beforeMount() {
    userSetup1
      .latestSoldProducts()
      .then(res => {
        this.latestProducts = res.data;
        if (this.latestProducts.length !== 0) {
          this.stdError = 1;

          var i = 0;
          var no = this.latestProducts.length;

          while (i < no) {
            this.productID = this.latestProducts[i].ProductID;
            if (this.latestProducts[i].Name === "fan") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getFan1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    category: "fan",
                    ProductID: this.productID,
                    Price: response[0].Price,
                    Image: response[0].Image,
                    Model: response[0].Model
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.latestProducts[i].Name === "mobile") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getMobile1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    ProductID: response[0].MobileID,
                    Price: response[0].Price,
                    Image: response[0].Image,
                    Model: response[0].Model,
                    category: "mobile"
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.latestProducts[i].Name === "mixer") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getMixer1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    ProductID: this.productID,
                    Price: response[0].Price,
                    category: "mixer",
                    Image: response[0].Image,
                    Model: response[0].Model
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.latestProducts[i].Name === "washingmachine") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getWashingMachine1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    ProductID: this.productID,
                    Price: response[0].Price,
                    Image: response[0].Image,
                    category: "washingmachine",
                    Model: response[0].Model
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.latestProducts[i].Name === "waterpurifier") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getWaterPurifier1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    ProductID: this.productID,
                    Price: response[0].Price,
                    Image: response[0].Image,
                    category: "waterpurifier",
                    Model: response[0].Model
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.latestProducts[i].Name === "tv") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getTV1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    ProductID: this.productID,
                    Price: response[0].Price,
                    Image: response[0].Image,
                    category: "tv",
                    Model: response[0].Model
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.latestProducts[i].Name === "iron") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getIron1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    ProductID: this.productID,
                    Price: response[0].Price,
                    Image: response[0].Image,
                    category: "iron",
                    Model: response[0].Model
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.latestProducts[i].Name === "oven") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getOven1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    ProductID: this.productID,
                    Price: response[0].Price,
                    Image: response[0].Image,
                    category: "oven",
                    Model: response[0].Model
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.latestProducts[i].Name === "speaker") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getSpeaker1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    ProductID: this.productID,
                    Price: response[0].Price,
                    Image: response[0].Image,
                    category: "speaker",
                    Model: response[0].Model
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.latestProducts[i].Name === "fridge") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getFridge1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    ProductID: this.productID,
                    Price: response[0].Price,
                    Image: response[0].Image,
                    category: "fridge",
                    Model: response[0].Model
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            } else if (this.latestProducts[i].Name === "flourmil") {
              const data1 = {
                cid: this.productID
              };
              manage
                .getFlourmil1(data1)
                .then(res => {
                  let response = res.data;
                  this.finalProducts.push({
                    Name: response[0].Name,
                    ProductID: this.productID,
                    Price: response[0].Price,
                    category: "flourmil",
                    Image: response[0].Image,
                    Model: response[0].Model
                  });
                })
                .catch(err => {
                  this.error = "Something Went Wrong!!!";
                });
            }

            i = i + 1;
          }
        } else {
          this.stdError = 0;
        }
      })
      .catch(err => {
        this.stdError = 0;
        this.error = "Something Went Wrong!!!";
      });
  }
};
</script>

<style scoped>
.bg {
  background-image: url("../../assets/images/pattern1.png");
}
</style>
