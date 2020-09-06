<template>
  <div>
    <subAdminHead></subAdminHead>

    <section class="content">
      <div class="container-fluid">
        <div v-if="currentProduct == 'fan'" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addFan"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell md-label="Size" md-sort-by="Size">{{ item.Size }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/fan/' + item.FanID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/fan/' + item.FanID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
        <div
          v-else-if="currentProduct == 'flourmil'"
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addFlourmil"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/flourmil/' + item.FlourmilID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/flourmil/' + item.FlourmilID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
        <div v-else-if="currentProduct == 'fridge'" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addFridge"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell
                    md-label="Capacity in Liter"
                    md-sort-by="CapacityLiter"
                  >{{ item.CapacityLiter }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell md-label="Doors" md-sort-by="Doors">{{ item.Doors }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/fridge/' + item.FridgeID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/fridge/' + item.FridgeID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
        <div v-else-if="currentProduct == 'iron'" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addIron"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell
                    md-label="Capacity in Watt"
                    md-sort-by="CapacityWatt"
                  >{{ item.CapacityWatt }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/iron/' + item.IronID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/iron/' + item.IronID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
        <div v-else-if="currentProduct == 'mixer'" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addMixer"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell md-label="Capacity" md-sort-by="Capacity">{{ item.Capacity }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/mixer/' + item.MixerID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/mixer/' + item.MixerID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
        <div v-else-if="currentProduct == 'mobile'" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addMobile"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/mobile/' + item.MobileID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/mobile/' + item.MobileID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
        <div v-else-if="currentProduct == 'oven'" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addOven"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell
                    md-label="Capacity in KG"
                    md-sort-by="CapacityKG"
                  >{{ item.CapacityKG }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/oven/' + item.OvenID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/oven/' + item.OvenID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
        <div
          v-else-if="currentProduct == 'speaker'"
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addSpeaker"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell md-label="Type" md-sort-by="Type">{{ item.Type }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/speaker/' + item.SpeakerID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/speaker/' + item.SpeakerID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
        <div v-else-if="currentProduct == 'tv'" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addTv"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/tv/' + item.TVID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/tv/' + item.TVID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
        <div
          v-else-if="currentProduct == 'washingmachine'"
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addWashingMachine"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell
                    md-label="Capacity in KG"
                    md-sort-by="CapacityKG"
                  >{{ item.CapacityKG }}</md-table-cell>
                  <md-table-cell
                    md-label="Load Capacity"
                    md-sort-by="LoadCapacity"
                  >{{ item.LoadCapacity }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/washingmachine/' + item.WashingMachineID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/washingmachine/' + item.WashingMachineID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
        <div
          v-else-if="currentProduct == 'waterpurifier'"
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <div class="card">
            <div class="header">
              {{ "Product List" }}&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                class="btn btn-primary waves-effect"
                @click="addWaterPurifier"
              >Add Product</button>
            </div>
            <div class="body table-responsive">
              <md-table
                v-model="searched"
                md-sort="Name"
                md-sort-order="asc"
                md-card
                md-fixed-header
                class="table table-hover"
              >
                <md-table-toolbar>
                  <md-field md-clearable class="md-toolbar-section-end">
                    <md-input
                      placeholder="Search by BrandName..."
                      v-model="search"
                      @input="searchOnTable"
                    />
                  </md-field>
                </md-table-toolbar>

                <md-table-empty-state md-label="No Product found" md-description="No Product found"></md-table-empty-state>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Brand Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
                  <md-table-cell md-label="Price" md-sort-by="Price">{{ item.Price }}</md-table-cell>
                  <md-table-cell md-label="Type" md-sort-by="Type">{{ item.Type }}</md-table-cell>
                  <md-table-cell md-label="Color" md-sort-by="Color">{{ item.Color }}</md-table-cell>
                  <md-table-cell md-label="Ratings" md-sort-by="Ratings">{{ item.Ratings }}</md-table-cell>
                  <md-table-cell md-label="Model" md-sort-by="Model">{{ item.Model }}</md-table-cell>
                  <md-table-cell v-if="item.Status === 1" md-label="Status" md-sort-by="Status">
                    <span style="color: red;">{{ "Blocked" }}</span>
                  </md-table-cell>
                  <md-table-cell v-if="item.Status === 0" md-label="Status" md-sort-by="Status">
                    <span style="color: green;">{{ "Unblocked" }}</span>
                  </md-table-cell>
                  <md-table-cell md-label="Action">
                    <router-link
                      class="btn btn-info waves-effect"
                      :to="'/subadmin/updateProduct/waterpurifier/' + item.WaterPurifierID"
                    >Edit</router-link>
                    <router-link
                      class="btn btn-danger waves-effect"
                      :to="'/subadmin/removeProduct/waterpurifier/' + item.WaterPurifierID"
                    >Block</router-link>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import manage from "../../services/subadmin/manageProduct";

const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.Name).includes(toLower(term)));
  }

  return items;
};

export default {
  data() {
    return {
      currentProduct: "",
      products: [],
      bname: "",
      error: "",
      error1: "",
      search: null,
      searched: []
    };
  },
  methods: {
    addFan() {
      this.$router.push("/subadmin/addproduct/fan");
    },
    addOven() {
      this.$router.push("/subadmin/addproduct/oven");
    },
    addTv() {
      this.$router.push("/subadmin/addproduct/tv");
    },
    addIron() {
      this.$router.push("/subadmin/addproduct/iron");
    },
    addSpeaker() {
      this.$router.push("/subadmin/addproduct/speaker");
    },
    addFlourmil() {
      this.$router.push("/subadmin/addproduct/flourmil");
    },
    addMobile() {
      this.$router.push("/subadmin/addproduct/mobile");
    },
    addMixer() {
      this.$router.push("/subadmin/addproduct/mixer");
    },
    addWaterPurifier() {
      this.$router.push("/subadmin/addproduct/waterpurifier");
    },
    addWashingMachine() {
      this.$router.push("/subadmin/addproduct/washingmachine");
    },
    addFridge() {
      this.$router.push("/subadmin/addproduct/fridge");
    },
    searchOnTable() {
      this.searched = searchByName(this.products, this.search);
    }
  },

  beforeMount() {
    if (this.$session.has("admin-email") === true) {
      this.$router.push("*");
    } else if (this.$session.has("subadmin-email") === true) {
        this.currentProduct = this.$route.params.product;
      if (this.currentProduct === "fan") {
        manage
          .getFan()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.currentProduct === "fridge") {
        manage
          .getFridge()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.currentProduct === "tv") {
        manage
          .getTV()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.currentProduct === "washingmachine") {
        manage
          .getWashingMachine()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.currentProduct === "waterpurifier") {
        manage
          .getWaterPurifier()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.currentProduct === "mixer") {
        manage
          .getMixer()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.currentProduct === "flourmil") {
        manage
          .getFlourMil()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.currentProduct === "speaker") {
        manage
          .getSpeaker()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.currentProduct === "oven") {
        manage
          .getOven()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.currentProduct === "iron") {
        manage
          .getIron()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      } else if (this.currentProduct === "mobile") {
        manage
          .getMobile()
          .then(res => {
            this.products = res.data;
            this.searched = this.products;
          })
          .catch(err => {
            this.error = "Something Went Wrong!!!";
          });
      }
    } else {
      this.$router.push("/subadmin-signin");
    }
  }
};
</script>
    

<style scoped>
</style>
        

