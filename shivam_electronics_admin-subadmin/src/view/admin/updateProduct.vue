<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div v-if="currentProduct == 'fan'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateFan()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendFanFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        v-model="model"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Size :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Size"
                        v-model="size"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Size"
                        maxlength="4"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'flourmil'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateFlourmil()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendFlourmilFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                        class="form-control"
                        placeholder="Model"
                        v-model="model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'fridge'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateFridge()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendFridgeFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        v-model="model"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Capacity :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Capacity in Liter"
                        v-model="capacityLiter"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Capacity"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      number of Doors :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="number of Doors"
                        v-model="doors"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Number of Doors"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'iron'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateIron()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendIronFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        v-model="model"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Capacity :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Capacity in Watt"
                        v-model="capacityWatt"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Capacity"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'mixer'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateMixer()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendMixerFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        v-model="model"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Capacity :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Capacity"
                        v-model="capacity"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Capacity"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'oven'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateOven()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendOvenFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        v-model="model"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Capacity :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Capacity in KG"
                        v-model="capacityKG"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Capacity in KG"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'speaker'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateSpeaker()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendSpeakerFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        v-model="model"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Type :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Type"
                        v-model="type"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Type"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'tv'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateTV()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendTVFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        v-model="model"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'washingmachine'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateWashingMachine()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTP://localhost:8081/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendWashingMachineFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                        v-model="model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Capacity :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Capacity in KG"
                        v-model="capacityKG"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Capacity in KG"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      LoadCapacity :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Load Capacity"
                        v-model="loadCapacity"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in load Capacity"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'waterpurifier'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateWaterPurifier()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendWaterPurifierFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        v-model="model"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Type :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Type"
                        v-model="type"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in type"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div v-else-if="currentProduct == 'mobile'" class="card">
          <div class="header">
            <h2>Edit Product Details</h2>
          </div>
          <div class="body">
            <form @submit.prevent="updateMobile()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      <img
                        v-if="image !== ''"
                        :src="'HTTPS://admin-gateway.shivam-electronics.in/assets/images/products/' + categoryName + '/' + image"
                        style="height: 220px; width: 200px;"
                        alt="Product Image"
                      />
                      <form enctype="multipart/form-data" @submit.prevent="sendMobileFile">
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      brandName : {{ brandName }}
                      <br />
                      <br />
                      <select class="form-control" v-model="brandID">
                        <option
                          v-for="(brand,index) in brands"
                          :key="index"
                          :value="brand.BrandID"
                        >{{ brand.Name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Ratings :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in ratings"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Price :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in price"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Colour :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Model :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                        v-model="model"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Warranty :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Warranty"
                        v-model="warranty"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Warranty"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Details :
                      <textarea
                        class="form-control"
                        placeholder="Details"
                        v-model="details"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      RAM :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter RAM in GB"
                        v-model="RAM"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in RAM"
                        maxlength="10"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      InternalStorage :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Internal Storage in GB"
                        v-model="internalStorage"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Internal Storage"
                        maxlength="10"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      ScreenSize :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Screen Size in inch"
                        v-model="screenSize"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Screen Size"
                        maxlength="10"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      SimCapacity :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Sim Capacity in GB"
                        v-model="simCapacity"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in SimCapacity"
                        maxlength="10"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Front Camera :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter MP of Front Camera"
                        v-model="cameraFront"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Mega Pixel"
                        maxlength="10"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-line">
                      Rear Camera :
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter MP of Rear Camera"
                        v-model="cameraRear"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Mega Pixel"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Quantity :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in qty"
                        class="form-control"
                        placeholder="Enter Product Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      Discount :
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <div class="switch">
                        <label>
                          <span>UnBlocked</span>
                          <input type="checkbox" v-model="status1" />
                          <span class="lever switch-col-red"></span>
                          <span>Blocked</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Edit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//Scripts

import manage from "../../services/admin/manageProduct";

export default {
  data() {
    return {
      currentProduct: "",
      error: "",
      status1: "",
      status2: "",
      details: "",
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
      cameraFront: null,
      cameraRear: null,
      simCapacity: null,
      screenSize: null,
      internalStorage: null,
      brandName: "",
      file: "",
      uploadStatus: 0,
      image: "",
      categoryName: "",
      discount: ""
    };
  },
  methods: {
    selectedFile() {
      this.file = this.$refs.file.files[0];
    },
    sendFanFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadFanImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },

    sendFlourmilFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadFlourmilImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    sendMobileFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadMobileImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    sendSpeakerFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadSpeakerImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    sendWashingMachineFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadWashingMachineImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    sendWaterPurifierFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadWaterPurifierImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    sendFridgeFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadFridgeImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    sendIronFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadIronImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    sendOvenFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadOvenImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    sendTVFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadTVImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },
    sendMixerFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      manage
        .uploadMixerImage(formData)
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.error = "Image Uploaded";
            this.image = response.name;
            this.uploadStatus = 1;
          } else {
            this.uploadStatus = 0;
            this.error = "Error occured!!!";
          }
        })
        .catch(err => {
          this.error = "Something Went Wrong!!!";
        });
    },

    moveBack(data) {
      this.$router.push("/admin/manageproducts/" + data);
    },
    updateFan() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.size === "") {
        this.error = "Please enter Size";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          size: this.size,
          qty: this.qty,
          status: this.status2,
          fanID: this.$route.params.id,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateFan(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    updateMobile() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.RAM === "") {
        this.error = "Please enter RAM of Mobile in GB";
      } else if (this.internalStorage === "") {
        this.error = "Please enter internalStorage in GB";
      } else if (this.screenSize === "") {
        this.error = "Please enter Screen Size in inch";
      } else if (this.simCapacity === "") {
        this.error = "Please enter Sim Capacity in GB";
      } else if (this.cameraFront === "") {
        this.error = "Please enter MP of Front Camera";
      } else if (this.cameraRear === "") {
        this.error = "Please enter MP of Rear Camera";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          qty: this.qty,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          RAM: this.RAM,
          internalStorage: this.internalStorage,
          screenSize: this.screenSize,
          cameraRear: this.cameraRear,
          cameraFront: this.cameraFront,
          simCapacity: this.simCapacity,
          status: this.status2,
          mobileID: this.$route.params.id,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateMobile(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    updateFlourmil() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          qty: this.qty,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          status: this.status2,
          flourmilID: this.$route.params.id,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateFlourmil(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    updateWaterPurifier() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.type === "") {
        this.error = "Please enter type";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          qty: this.qty,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          status: this.status2,
          type: this.type,
          waterpurifierID: this.$route.params.id,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateWaterPurifier(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    updateFridge() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.capacityLiter === "") {
        this.error = "Please enter capacity in liter";
      } else if (this.doors === "") {
        this.error = "Please enter number of doors";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          qty: this.qty,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          status: this.status2,
          fridgeID: this.$route.params.id,
          doors: this.doors,
          capacityLiter: this.capacityLiter,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateFridge(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    updateSpeaker() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.type === "") {
        this.error = "Please enter type";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          status: this.status2,
          qty: this.qty,
          speakerID: this.$route.params.id,
          type: this.type,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateSpeaker(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    updateIron() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.capcacityWatt === "") {
        this.error = "Please enter capacity in Watt";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          capacityWatt: this.capacityWatt,
          qty: this.qty,
          status: this.status2,
          ironID: this.$route.params.id,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateIron(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    updateMixer() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.capacity === "") {
        this.error = "Please enter Capacity";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          qty: this.qty,
          capacity: this.capacity,
          status: this.status2,
          mixerID: this.$route.params.id,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateMixer(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    updateOven() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.capacityKG === "") {
        this.error = "Please enter capacity in KG";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          qty: this.qty,
          capacityKG: this.capcacityKG,
          status: this.status2,
          ovenID: this.$route.params.id,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateOven(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    updateWashingMachine() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.capacityKG === "") {
        this.error = "Please enter capacity in KG";
      } else if (this.loadCapacity === "") {
        this.error = "Please enter LoadCapacity";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          capacityKG: this.capcacityKG,
          qty: this.qty,
          loadCapacity: this.loadCapacity,
          status: this.status2,
          washingmachineID: this.$route.params.id,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateWashingMachine(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    updateTV() {
      if (this.status1 == true) {
        this.status2 = 1;
      } else {
        this.status2 = 0;
      }

      if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.qty === "") {
        this.error = "Please enter Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          qty: this.qty,
          status: this.status2,
          tvID: this.$route.params.id,
          image: this.image,
          discount: this.discount
        };
        manage
          .updateTV(data)
          .then(res => {
            let response = res.data;

            this.error = "Update Successfull!!!";
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    }
  },
  beforeMount() {
    if (this.$session.has("subadmin-email") === true) {
      this.$router.push("*");
    } else if (this.$session.has("admin-email") === true) {
      this.currentProduct = this.$route.params.product;

      manage
        .getBrands()
        .then(res => {
          this.brands = res.data;
        })
        .catch(err => {
          this.error = "Something went Wrong Please Try Again Later !!!";
        });

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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.discount = response[0].Discount;

            this.categoryName = "fan";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.discount = response[0].Discount;

            this.categoryName = "fridge";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.qty = response[0].Quantity;
            this.discount = response[0].Discount;

            this.categoryName = "mixer";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.qty = response[0].Quantity;
            this.discount = response[0].Discount;

            this.categoryName = "tv";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.qty = response[0].Quantity;
            this.discount = response[0].Discount;

            this.categoryName = "speaker";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.qty = response[0].Quantity;
            this.discount = response[0].Discount;

            this.categoryName = "iron";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.qty = response[0].Quantity;
            this.discount = response[0].Discount;

            this.categoryName = "oven";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.qty = response[0].Quantity;
            this.discount = response[0].Discount;

            this.categoryName = "washingmachine";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.qty = response[0].Quantity;
            this.discount = response[0].Discount;

            this.categoryName = "waterpurifier";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.qty = response[0].Quantity;
            this.discount = response[0].Discount;

            this.categoryName = "mobile";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
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
            let s = response[0].Status;
            this.image = response[0].Image;
            this.qty = response[0].Quantity;
            this.discount = response[0].Discount;

            this.categoryName = "flourmil";

            if (s == 0) {
              this.status1 = false;
            } else {
              this.status1 = true;
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    
<style scoped>
</style>
        

