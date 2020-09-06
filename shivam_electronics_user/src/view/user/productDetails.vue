<template>
  <div>
    <userHead :key="keyFlag"></userHead>

    <div id="mainBody">
      <div class="container">
        <div class="row">
          <userSidebar :key="keyFlag"></userSidebar>

          <div class="span9">
            <ul class="breadcrumb">
              <li>
                <a href="/">Home</a>
                <span class="divider">/</span>
              </li>
              <li>
                <a :href="'/products/' + currentProduct">{{ currentProduct }}</a>
                <span class="divider">/</span>
              </li>
              <li class="active">Product Details</li>
            </ul>

            <div class="row" v-if="currentProduct === 'mobile'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/mobile/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">RAM :</td>
                          <td class="techSpecTD2">{{ RAM + " " + "GB"}}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Internal InternalStorage :</td>
                          <td class="techSpecTD2">{{ internalStorage + " " + "GB"}}</td>
                        </tr>

                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Screen Size :</td>
                          <td class="techSpecTD2">{{ screenSize }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Sim Capacity :</td>
                          <td class="techSpecTD2">{{ simCapacity + " " + "GB" }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Front Camera :</td>
                          <td class="techSpecTD2">{{ cameraFront + " " + "MP" }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Rear Camera :</td>
                          <td class="techSpecTD2">{{ cameraRear + " " + "MP" }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="tab-pane fade" id="profile">
                    <div class="tab-content" v-if="currentProduct === 'mobile'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>

                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a :href="'/products/' + currentProduct + '/' + product.MobileID">
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.MobileID"
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

                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>

                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>

                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row" v-else-if="currentProduct === 'fan'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/fan/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Size :</td>
                          <td class="techSpecTD2">{{ size }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>
                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>

                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <br class="clr" />
                    <div class="tab-content" v-if="currentProduct === 'fan'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>
                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a :href="'/products/' + currentProduct + '/' + product.FanID">
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.FanID"
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

            <div class="row" v-else-if="currentProduct === 'flourmil'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/flourmil/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr1 }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>
                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>

                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <br class="clr" />
                    <div class="tab-content" v-if="currentProduct === 'flourmil'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>
                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a :href="'/products/' + currentProduct + '/' + product.MobileID">
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.FlourmilID"
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

            <div class="row" v-else-if="currentProduct === 'fridge'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/fridge/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Capacity :</td>
                          <td class="techSpecTD2">{{ capacityLiter + " " + "Liter"}}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Doors :</td>
                          <td class="techSpecTD2">{{ doors }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>
                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>

                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <br class="clr" />
                    <div class="tab-content" v-if="currentProduct === 'fridge'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>
                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a :href="'/products/' + currentProduct + '/' + product.FridgeID">
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.FridgeID"
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

            <div class="row" v-else-if="currentProduct === 'iron'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/iron/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Capacity :</td>
                          <td class="techSpecTD2">{{ capacityWatt + " " + "Watt"}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>
                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>

                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <br class="clr" />
                    <div class="tab-content" v-if="currentProduct === 'iron'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>
                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a :href="'/products/' + currentProduct + '/' + product.MobileID">
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.IronID"
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

            <div class="row" v-else-if="currentProduct === 'mixer'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/mixer/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Capacity :</td>
                          <td class="techSpecTD2">{{ capacity }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>
                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>
                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <br class="clr" />
                    <div class="tab-content" v-if="currentProduct === 'mixer'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>
                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a :href="'/products/' + currentProduct + '/' + product.MixerID">
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.MixerID"
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

            <div class="row" v-else-if="currentProduct === 'oven'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/oven/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Capacity :</td>
                          <td class="techSpecTD2">{{ capacityKG + " " + "KG"}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>
                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>
                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <br class="clr" />
                    <div class="tab-content" v-if="currentProduct === 'oven'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>
                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a :href="'/products/' + currentProduct + '/' + product.OvenID">
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.OvenID"
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

            <div class="row" v-else-if="currentProduct === 'speaker'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/speaker/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Type :</td>
                          <td class="techSpecTD2">{{ type }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>
                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>

                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <br class="clr" />
                    <div class="tab-content" v-if="currentProduct === 'speaker'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>
                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a :href="'/products/' + currentProduct + '/' + product.SpeakerID">
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.SpeakerID"
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

            <div class="row" v-else-if="currentProduct === 'tv'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/tv/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr1 }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>
                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>
                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <br class="clr" />
                    <div class="tab-content" v-if="currentProduct === 'tv'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>
                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a :href="'/products/' + currentProduct + '/' + product.TVID">
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.TVID"
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

            <div class="row" v-else-if="currentProduct === 'washingmachine'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/washingmachine/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Capacity :</td>
                          <td class="techSpecTD2">{{ capacityKG + " " + "KG"}}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Load Capacity :</td>
                          <td class="techSpecTD2">{{ loadCapacity }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>
                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>

                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="profile">
                    <br class="clr" />
                    <div class="tab-content" v-if="currentProduct === 'washingmachine'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>
                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a
                                  :href="'/products/' + currentProduct + '/' + product.WashingMachineID"
                                >
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.WashingMachineID"
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

            <div class="row" v-else-if="currentProduct === 'waterpurifier'">
              <div
                style="height: 220px; width: 270px;  margin: auto;"
                id="gallery"
                class="span3"
                align="center"
              >
                <img
                  v-if="image !== ''"
                  class="zoom"
                  :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/waterpurifier/' + image"
                  style="width: 100%; height: 100%; object-fit: scale-down;"
                  alt="Product Image"
                />
              </div>

              <div class="span6">
                <h3>{{ brandName + " " + model }}</h3>
                <hr class="soft" />
                <form class="form-horizontal qtyFrm" @submit.prevent="addToCart()">
                  <div class="control-group">
                    <label class="control-label">
                      <span>Price : ₹ {{ price }}</span>
                    </label>
                    <label class="control-label">
                      <span>Discount : ₹ {{ discount }}</span>
                    </label>
                    <div class="controls">
                      <input
                        type="text"
                        class="span1"
                        placeholder="Qty."
                        v-model="productQTY"
                        pattern="[0-9]*"
                        required
                      />
                      <button type="submit" class="btn btn-large btn-primary pull-right">
                        Add to cart
                        <i class="icon-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <div v-if="cartStatus === 1" class="alert alert-success">{{ cartError }}</div>
                <div v-if="cartStatus === 2" class="alert alert-danger">{{ cartError }}</div>

                <hr class="soft" />
                <h4>Color : {{ color }}</h4>
                <h4>{{ qty }} items in stock</h4>

                <hr class="soft clr" />

                <textarea class="input-xxlarge" id="textarea1" rows="9" disabled v-model="details"></textarea>
                <a class="btn btn-small pull-right" href="#detail">More Details</a>
                <br class="clr" />
                <a href="#" name="detail"></a>
                <hr class="soft" />
              </div>

              <div class="span9">
                <ul id="productDetail" class="nav nav-tabs">
                  <li class="active">
                    <a href="#home" data-toggle="tab">Product Details</a>
                  </li>
                  <li>
                    <a href="#profile" data-toggle="tab">Related Products</a>
                  </li>
                  <li>
                    <a href="#review" data-toggle="tab">Reviews</a>
                  </li>
                  <li v-if="reviewFlag === 1">
                    <a href="#addReview" data-toggle="tab">Add Review</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active in" id="home">
                    <h4>Product Information</h4>
                    <table class="table table-bordered">
                      <tbody>
                        <tr class="techSpecRow">
                          <th colspan="2">Product Details</th>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Brand :</td>
                          <td class="techSpecTD2">{{ brandName }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Model :</td>
                          <td class="techSpecTD2">{{ model }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Ratings :</td>
                          <td class="techSpecTD2">{{ ratings }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Warranty :</td>
                          <td class="techSpecTD2">{{ warranty }}</td>
                        </tr>
                        <tr class="techSpecRow">
                          <td class="techSpecTD1">Type :</td>
                          <td class="techSpecTD2">{{ type }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="addReview">
                    <h4>Add your review</h4>
                    <div v-if="reviewErrorr !== ''" class="alert alert-success">{{ reviewErrorr }}</div>
                    <div v-if="reviewErrorr1 !== ''" class="alert alert-danger">{{ reviewErrorr1 }}</div>
                    <div class="tab-content">
                      <div class="control-group">
                        <label class="control-label" for="Review">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            placeholder="Write Something..."
                            v-model="Revieww"
                          ></textarea>
                        </div>
                      </div>
                      <div class="control-group">
                        <div class="controls">
                          <button type="button" class="btn btn-success" @click="addReview()">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="review">
                    <h2 v-if="err2 !== ''" align="center" style="color: red;">{{ err2 }}</h2>

                    <h4 v-else>Customer Reviews</h4>
                    <div v-if="reviewError !== ''" class="alert alert-success">{{ reviewError }}</div>
                    <div v-if="reviewError1 !== ''" class="alert alert-danger">{{ reviewError1 }}</div>
                    <div class="tab-content" v-for="(review,index) in reviews" :key="index">
                      <div class="control-group">
                        <label
                          class="control-label"
                          for="Lastname"
                        >Customer Name : {{ review.FirstName + " " + review.LastName }}</label>
                      </div>
                      <div class="control-group">
                        <label class="control-label" for="EmailAddress">Review :</label>
                        <div class="controls">
                          <textarea
                            class="input-xxlarge"
                            id="textarea1"
                            rows="3"
                            disabled
                            v-model="review.Review"
                          ></textarea>

                          <div class="btn-toolbar">
                            <div class="btn-group">
                              <span
                                class="btn"
                                title="Report"
                                @click="reportReview(review.ReviewID)"
                              >
                                <i class="icon-envelope"></i>
                              </span>
                              <span class="btn" title="Like" @click="likeReview(review.ReviewID)">
                                <i class="icon-thumbs-up"></i>
                              </span>
                              <span
                                class="btn"
                                title="Dislike"
                                @click="dislikeReview(review.ReviewID)"
                              >
                                <i class="icon-thumbs-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <br class="clr" />
                    <div class="tab-content" v-if="currentProduct === 'waterpurifier'">
                      <h2 v-if="err !== ''" align="center" style="color: red;">{{ err }}</h2>
                      <div class="tab-pane active" id="blockView">
                        <ul class="thumbnails">
                          <li class="span3" v-for="(product,index) in products" :key="index">
                            <div class="thumbnail">
                              <div style="height: 220px; width: 260px;  margin: auto;">
                                <a
                                  :href="'/products/' + currentProduct + '/' + product.WaterPurifierID"
                                >
                                  <img
                                    :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + currentProduct + '/' + product.Image"
                                    style="width: 100%; height: 100%; object-fit: scale-down;"
                                    alt
                                  />
                                </a>
                              </div>
                              <div class="caption">
                                <h5>{{ brandName + " " + product.Model }}</h5>
                                <h4>
                                  <a
                                    class="btn btn-info"
                                    :href="'/products/' + currentProduct + '/' + product.WaterPurifierID"
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
                    <br class="clr" />
                  </div>
                </div>
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
import manage from "../../services/admin/manageProduct";
import product from "../../services/user/userSetup_service";

export default {
  data() {
    return {
      currentProduct: "",
      productID: "",
      error: "",
      details: "",
      key: 0,
      qty: null,
      price: null,
      size: null,
      warranty: "",
      model: "",
      ratings: null,
      brandID: null,
      color: "",
      brands: [],
      capacityLiter: null,
      doors: null,
      capacityWatt: null,
      capacity: null,
      capacityKG: null,
      type: null,
      loadCapacity: "",
      RAM: null,
      err: "",
      cameraFront: null,
      cameraRear: null,
      simCapacity: null,
      screenSize: null,
      internalStorage: null,
      brandName: "",
      image: "",
      products: [],
      reviews: [],
      err2: "",
      reviewError: "",
      reviewError1: "",
      reviewErrorr: "",
      reviewErrorr1: "",
      Revieww: "",
      discount: "",
      productQTY: "",
      cartStatus: 0,
      cartError: "",
      reviewFlag: 0
    };
  },
  methods: {
    addToCart() {
      if (this.$session.exists() === true) {
        if (this.productQTY === "" || this.productQTY === "0") {
          this.cartStatus = 2;
          this.cartError = "Please enter Quantity";
        } else {
          if (this.productQTY <= this.qty) {
            const data2 = {
              email: this.$session.get("email"),
              category: this.$route.params.category,
              pid: this.$route.params.id,
              qty: this.productQTY
            };
            product
              .addToCart(data2)
              .then(res => {
                let response = res.data;

                if (response.result === 1) {
                  this.cartStatus = 1;
                  this.cartError = "Product successfully added to your cart";
                  this.keyFlag += 1;
                } else {
                  this.cartStatus = 2;
                  this.cartError = "Error Occured please try again later!!!";
                }
              })
              .catch(err => {
                this.cartStatus = 2;
                this.cartError = "Something Went Wrong !!!";
              });
          } else {
            this.cartStatus = 2;
            this.cartError =
              "Quantity entered is higher than Quantity available in Stock";
          }
        }
      } else {
        this.cartStatus = 2;
        this.cartError = "Please do Login First!!!";
      }
    },
    addReview() {
      if (this.$session.exists() === true) {
        this.Revieww = this.Revieww.trim();
        if (this.Revieww === "") {
          this.reviewErrorr1 = "Please enter your comment!!!";
        } else {
          const data2 = {
            email: this.$session.get("email"),
            pid: this.productID,
            category: this.currentProduct,
            review: this.Revieww
          };
          product
            .addReview(data2)
            .then(res => {
              let response = res.data;

              if (response.result === 1) {
                this.reviewErrorr = "Review Successfully Submitted";
                this.reviewErrorr1 = "";
              } else {
                this.reviewErrorr = "";
                this.reviewErrorr1 =
                  "You have already submitted your review for this product";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        }
      } else {
        this.reviewErrorr = "";
        this.reviewErrorr1 = "Please do login first!!!";
      }
    },
    reportReview(id) {
      if (this.$session.exists() === true) {
        const data2 = {
          email: this.$session.get("email"),
          rid: id
        };
        product
          .reportReview(data2)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.reviewError = "Review successfully reported.";
              this.reviewError1 = "";
            } else {
              this.reviewError = "";
              this.reviewError1 = "You have already reported this review.";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else {
        this.reviewError = "";
        this.reviewError1 = "Please do login first!!!";
      }
    },
    likeReview(id) {
      if (this.$session.exists() === true) {
        const data2 = {
          email: this.$session.get("email"),
          rid: id
        };
        product
          .likeReview(data2)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.reviewError = "Review successfully liked";
              this.reviewError1 = "";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else {
        this.reviewError = "";
        this.reviewError1 = "Please do login first!!!";
      }
    },
    dislikeReview(id) {
      if (this.$session.exists() === true) {
        const data2 = {
          email: this.$session.get("email"),
          rid: id
        };
        product
          .dislikeReview(data2)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.reviewError1 = "Review successfully disliked";
              this.reviewError = "";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      } else {
        this.reviewError1 = "";
        this.reviewError = "Please do login first!!!";
      }
    }
  },
  beforeMount() {
    if (this.$session.exists() === true) {
      this.reviewFlag = 1;
    } else {
      this.reviewFlag = 0;
    }

    this.currentProduct = this.$route.params.category;
    this.productID = this.$route.params.id;

    if (this.currentProduct == "fan") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getFan1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.qty = response[0].Quantity;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.size = response[0].Size;
          this.image = response[0].Image;
          this.discount = response[0].Discount;
          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedFan(data1)
            .then(res => {
              this.products = res.data;

              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getFanReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    } else if (this.currentProduct == "fridge") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getFridge1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.capacityLiter = response[0].CapacityLiter;
          this.doors = response[0].Doors;
          this.qty = response[0].Quantity;
          this.image = response[0].Image;
          this.discount = response[0].Discount;
          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedFridge(data1)
            .then(res => {
              this.products = res.data;
              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getFridgeReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    } else if (this.currentProduct == "mixer") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getMixer1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.capacity = response[0].Capacity;
          this.image = response[0].Image;
          this.qty = response[0].Quantity;
          this.discount = response[0].Discount;
          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedMixer(data1)
            .then(res => {
              this.products = res.data;
              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getMixerReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    } else if (this.currentProduct == "tv") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getTV1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.image = response[0].Image;
          this.qty = response[0].Quantity;
          this.discount = response[0].Discount;
          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedTV(data1)
            .then(res => {
              this.products = res.data;
              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getTVReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    } else if (this.currentProduct == "speaker") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getSpeaker1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.type = response[0].Type;
          this.image = response[0].Image;
          this.qty = response[0].Quantity;
          this.discount = response[0].Discount;
          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedSpeaker(data1)
            .then(res => {
              this.products = res.data;
              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getSpeakerReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    } else if (this.currentProduct == "iron") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getIron1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.capacityWatt = response[0].CapacityWatt;
          this.image = response[0].Image;
          this.qty = response[0].Quantity;
          this.discount = response[0].Discount;
          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedIron(data1)
            .then(res => {
              this.products = res.data;
              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getIronReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    } else if (this.currentProduct == "oven") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getOven1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.capacityKG = response[0].CapacityKG;
          this.image = response[0].Image;
          this.qty = response[0].Quantity;
          this.discount = response[0].Discount;
          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedOven(data1)
            .then(res => {
              this.products = res.data;
              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getOvenReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    } else if (this.currentProduct == "washingmachine") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getWashingMachine1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.loadCapacity = response[0].LoadCapacity;
          this.capacityKG = response[0].CapacityKG;
          this.image = response[0].Image;
          this.qty = response[0].Quantity;
          this.discount = response[0].Discount;
          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedWashingMachine(data1)
            .then(res => {
              this.products = res.data;
              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getWashingMachineReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    } else if (this.currentProduct == "waterpurifier") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getWaterPurifier1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.type = response[0].Type;
          this.image = response[0].Image;
          this.qty = response[0].Quantity;
          this.discount = response[0].Discount;
          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedWaterPurifier(data1)
            .then(res => {
              this.products = res.data;
              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });

          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getWaterPurifierReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    } else if (this.currentProduct == "mobile") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getMobile1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.cameraFront = response[0].CameraFront;
          this.cameraRear = response[0].CameraRear;
          this.simCapacity = response[0].SimCapacity;
          this.screenSize = response[0].ScreenSize;
          this.RAM = response[0].RAM;
          this.internalStorage = response[0].InternalStorage;
          this.image = response[0].Image;
          this.qty = response[0].Quantity;
          this.discount = response[0].Discount;

          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedMobile(data1)
            .then(res => {
              this.products = res.data;

              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });

          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getMobileReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    } else if (this.currentProduct == "flourmil") {
      const data = {
        cid: this.$route.params.id
      };
      manage
        .getFlourmil1(data)
        .then(res => {
          let response = res.data;

          this.brandID = response[0].BrandID;
          this.ratings = response[0].Ratings;
          this.brandName = response[0].Name;
          this.price = response[0].Price;
          this.color = response[0].Color;
          this.model = response[0].Model;
          this.warranty = response[0].Warranty;
          this.details = response[0].Details;
          this.image = response[0].Image;
          this.qty = response[0].Quantity;
          this.discount = response[0].Discount;
          const data1 = {
            bid: this.brandID,
            id: this.productID
          };
          product
            .getRelatedFlourmil(data1)
            .then(res => {
              this.products = res.data;
              if (this.products.length === 0) {
                this.err = "Related products are not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });

          const data2 = {
            pid: this.productID,
            name: this.currentProduct
          };
          product
            .getFlourmilReview(data2)
            .then(res => {
              this.reviews = res.data;

              if (this.reviews.length === 0) {
                this.err2 = "Customer reviews not available";
              }
            })
            .catch(err => {
              this.error = "Some thing went wrong!!!";
            });
        })
        .catch(err => {
          this.error = "Some thing went wrong!!!";
        });
    }
  }
};
</script>

<style scoped>
.zoom {
  transition: transform 0.3s;
}

.zoom:hover {
  transform: scale(1.5);
}
</style>
