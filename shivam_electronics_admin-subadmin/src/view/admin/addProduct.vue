<template>
  <div>
    <adminHead></adminHead>

    <section class="content">
      <div class="container-fluid">
        <div v-if="currentProduct == 'fan'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addFan()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in ratings"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in Price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in Size"
                        class="form-control"
                        placeholder="Size"
                        v-model="size"
                        maxlength="4"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed in Color"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                        placeholder="Model"
                        v-model="model"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in qty"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendFanFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'fridge'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addFridge()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in ratings"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in size"
                        class="form-control"
                        placeholder="Size"
                        v-model="size"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed in color"
                        placeholder="Colour"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                        placeholder="Model"
                        v-model="model"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Capacity in liter"
                        v-model="capacityLiter"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Capacity in Liters"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in number of doors"
                        class="form-control"
                        placeholder="number of doors"
                        v-model="doors"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Qty"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendFridgeFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'speaker'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addSpeaker()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in Ratings"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in Price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed in Colour"
                        placeholder="Colour"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed in Type"
                        class="form-control"
                        placeholder="Type"
                        v-model="type"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendSpeakerFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>

                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="button" class="btn btn-success waves-effect">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'flourmil'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addFlourmil()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in Ratings"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in Price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[a-zA-Z]*"
                        title="Only Characters are allowed in colour"
                        placeholder="Colour"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                        placeholder="Model"
                        v-model="model"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in Discount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendFlourmilFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>

                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="button" class="btn btn-success waves-effect m-r-20">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'mobile'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addMobile()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in ratings"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only Numbers are allowed in price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                        class="form-control"
                        placeholder="Colour"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in RAM"
                        class="form-control"
                        placeholder="RAM in GB"
                        v-model="ram"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Internal Storage"
                        class="form-control"
                        placeholder="InternalStorage in GB"
                        v-model="internalStorage"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Screen Size"
                        class="form-control"
                        placeholder="ScreenSize in Inch"
                        v-model="screenSize"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in SimCapacity"
                        class="form-control"
                        placeholder="SimCapacity in GB"
                        v-model="simCapacity"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Mega Pixel"
                        class="form-control"
                        placeholder="Front Camera in Mega Pixel"
                        v-model="cameraFront"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Megapixel"
                        class="form-control"
                        placeholder="Rear Camera in Mega Pixel"
                        v-model="cameraRear"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendMobileFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>

                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'iron'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addIron()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                        placeholder="Colour"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[a-zA-Z0-9]*"
                        title="Only characters and numbers are allowed in Model"
                        placeholder="Model"
                        v-model="model"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Capacity in Watt"
                        class="form-control"
                        placeholder="Capacity in Watt"
                        v-model="capacityWatt"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendIronFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>

                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'oven'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addOven()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                        placeholder="Colour"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                        placeholder="Model"
                        v-model="model"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Capacity"
                        class="form-control"
                        placeholder="Enter Capacity in KG"
                        v-model="capacityKG"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendOvenFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>

                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'washingmachine'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addWashingMachine()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                        placeholder="Colour"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                        type="text"
                        class="form-control"
                        placeholder="Model"
                        v-model="model"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Capacity in KG"
                        v-model="capacityKG"
                        maxlength="10"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Capacity"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Load Capacity"
                        v-model="loadCapacity"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in LoadCapacity"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendWashingMachineFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>

                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'waterpurifier'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addWaterPurifier()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                        placeholder="Colour"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        class="form-control"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Type"
                        placeholder="Type"
                        v-model="type"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Dicount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendWaterPurifierFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>

                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'mixer'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addMixer()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                        placeholder="Colour"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                        placeholder="Model"
                        v-model="model"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Capacity"
                        class="form-control"
                        placeholder="Capacity"
                        v-model="capacity"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Dicount"
                        class="form-control"
                        placeholder="Discount"
                        v-model="discount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendMixerFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>

                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-else-if="currentProduct == 'tv'" class="card">
          <div class="header">
            <h2>Add details of {{ this.$route.params.product }}</h2>
          </div>
          <div class="body">
            <form @submit.prevent="addTV()">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <div class="form-line">
                      {{ "Select Brand :" }}
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Ratings"
                        class="form-control"
                        placeholder="Ratings"
                        v-model="ratings"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in Price"
                        class="form-control"
                        placeholder="Price"
                        v-model="price"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Colour"
                        pattern="[a-zA-Z]*"
                        title="Only characters are allowed in Colour"
                        v-model="color"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <input
                        type="text"
                        class="form-control"
                        pattern="[0-9a-zA-Z]*"
                        title="Only numbers and Characters are allowed in Model"
                        placeholder="Model"
                        v-model="model"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <input
                        type="text"
                        pattern="[0-9]*"
                        title="Only numbers are allowed in QTY"
                        class="form-control"
                        placeholder="Qauntity"
                        v-model="qty"
                        maxlength="10"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
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
                      <textarea
                        name="details"
                        id="details"
                        cols="30"
                        rows="10"
                        class="form-control"
                        placeholder="details"
                        v-model="details"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-line">
                      <form enctype="multipart/form-data" @submit.prevent="sendTVFile">
                        Image upload :
                        <br />
                        <br />
                        <input type="file" ref="file" @change="selectedFile" />
                        <br />

                        <button class="btn btn-primary waves-effect">Upload</button>
                      </form>
                    </div>
                  </div>
                  <div v-if="error !== ''" class="alert alert-danger">{{ error }}</div>
                  <br />
                  <button type="submit" class="btn btn-success waves-effect m-r-20">Add</button>
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
import manage from "../../services/admin/manageProduct";

export default {
  data() {
    return {
      currentProduct: "",
      error: "",
      details: "",
      price: "",
      size: "",
      warranty: "",
      model: "",
      ratings: "",
      brandID: "",
      color: "",
      brands: [],
      qty: "",
      capacityLiter: "",
      doors: "",
      capcacityWatt: "",
      capacity: "",
      capacityKG: "",
      type: "",
      loadCapacity: "",
      ram: "",
      cameraFront: "",
      cameraRear: "",
      simCapacity: "",
      screenSize: "",
      internalStorage: "",
      file: "",
      uploadStatus: 0,
      image: "",
      discount: ""
    };
  },
  methods: {
    selectedFile() {
      this.file = this.$refs.file.files[0];
    },
    addFan() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.size === "") {
        this.error = "Please enter Size";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details,
          size: this.size,
          qty: this.qty,
          image: this.image,
          discount: this.discount
        };
        manage
          .addFan(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    moveBack(data){
      this.$router.push("/admin/manageproducts/" + data);
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
    addMobile() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.ram === "") {
        this.error = "Please enter RAM of Mobile";
      } else if (this.internalStorage === "") {
        this.error = "Please enter internal Storage of Mobile";
      } else if (this.screenSize === "") {
        this.error = "Please enter ScreenSize";
      } else if (this.simCapacity === "") {
        this.error = "Please enter Capacity of Sim";
      } else if (this.cameraFront === "") {
        this.error = "Please enter MP of front Camera";
      } else if (this.cameraRear === "") {
        this.error = "Please enter MP of Rear Camera";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          RAM: this.ram,
          instorage: this.internalStorage,
          cameraFront: this.cameraFront,
          cameraRear: this.cameraRear,
          simCapacity: this.simCapacity,
          screenSize: this.screenSize,
          qty: this.qty,
          image: this.image,
          discount: this.discount
        };
        manage
          .addMobile(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    addWaterPurifier() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.type === "") {
        this.error = "Please enter type";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
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
          type: this.type,
          image: this.image,
          discount: this.discount
        };
        manage
          .addWaterPurifier(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    addTV() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          qty: this.qty,

          image: this.image,

          warranty: this.warranty,
          details: this.details.trim(),
          discount: this.discount
        };
        manage
          .addTV(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    addWashingMachine() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.capacityKG === "") {
        this.error = "Please enter the capacity in KG";
      } else if (this.loadCapacity === "") {
        this.error = "Please enter the load Capacity";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          qty: this.qty,
          image: this.image,

          warranty: this.warranty,
          details: this.details.trim(),
          capacity: this.capacityKG,
          lcapacity: this.loadCapacity,
          discount: this.discount
        };
        manage
          .addWashingMachine(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    addFlourmil() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          qty: this.qty,
          image: this.image,

          warranty: this.warranty,
          details: this.details.trim(),
          discount: this.discount
        };
        manage
          .addFlourmil(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    addFridge() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.capacityLiter === "") {
        this.error = "Please enter Capacity in Liter";
      } else if (this.doors === "") {
        this.error = "Please enter number of Doors";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
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
          capacity: this.capacityLiter,
          doors: this.doors,
          image: this.image,
          discount: this.discount
        };
        manage
          .addFridge(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    addIron() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.capacityWatt === "") {
        this.error = "Please enter Capacity in Watt";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
      } else {
        const data = {
          brandID: this.brandID,
          qty: this.qty,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          image: this.image,
          warranty: this.warranty,
          details: this.details.trim(),
          capacity: this.capacityWatt,
          discount: this.discount
        };
        manage
          .addIron(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    addMixer() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.capacity === "") {
        this.error = "Please enter Capacity";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          qty: this.qty,
          image: this.image,
          warranty: this.warranty,
          details: this.details.trim(),
          capacity: this.capacity,
          discount: this.discount
        };
        manage
          .addMixer(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    addOven() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.capacityKG === "") {
        this.error = "Please enter Capacity in KG";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          qty: this.qty,
          image: this.image,
          warranty: this.warranty,
          details: this.details.trim(),
          capacity: this.capacityKG,
          discount: this.discount
        };
        manage
          .addOven(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    },
    addSpeaker() {
      if (this.brandID === "") {
        this.error = "Please Select Brand";
      } else if (this.ratings === "") {
        this.error = "Please enter Ratings";
      } else if (this.price === "") {
        this.error = "Please enter Price";
      } else if (this.color === "") {
        this.error = "Please enter Colour";
      } else if (this.model === "") {
        this.error = "Please enter Model";
      } else if (this.warranty === "") {
        this.error = "Please enter Warranty";
      } else if (this.type === "") {
        this.error = "Please enter Type of Speaker";
      } else if (this.qty === "") {
        this.error = "Please enter Product Quantity";
      } else if (this.discount === "") {
        this.error = "Please enter Product discount";
      } else if (this.discount > this.price) {
        this.error = "Entered Discount is greater than the product price";
      } else if (this.details.trim() === "") {
        this.error = "Please enter Product details";
      } else if (this.uploadStatus === 0) {
        this.error = "Please upload Product Image";
      } else {
        const data = {
          brandID: this.brandID,
          ratings: this.ratings,
          price: this.price,
          color: this.color,
          model: this.model,
          warranty: this.warranty,
          details: this.details.trim(),
          type: this.type,
          qty: this.qty,
          image: this.image,
          discount: this.discount
        };
        manage
          .addSpeaker(data)
          .then(res => {
            let response = res.data;

            if (response.result === 1) {
              this.error = "The Product details are added successfully!!!";
            }
          })
          .catch(err => {
            this.error = "Some thing went wrong!!!";
          });
      }
    }
  },
  beforeMount() {
     if(this.$session.has("subadmin-email") === true)
    {
      this.$router.push("*");
    }
    else if (this.$session.has("admin-email") === true) {
      this.currentProduct = this.$route.params.product;

      manage
        .getBrands()
        .then(res => {
          this.brands = res.data;
        })
        .catch(err => {
          this.error = "Something went Wrong Please Try Again Later !!!";
        });
    } else {
      this.$router.push("/admin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        
