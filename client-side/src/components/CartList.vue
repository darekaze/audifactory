<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex>
      <h2>Cart</h2>
      <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="albums"
        hide-actions
        item-key="itemId">
        <template slot="items" slot-scope="props">
          <td class="text-xs">
            {{ props.item.title }}
          </td>
          <td class="text-xs">
            {{ getPrice(props.item.price) }}
          </td>
          <td class="text-xs-right">
            <v-icon
              small
              @click="deleteItem(props.item)">
              delete
            </v-icon>
            <v-btn
              color="primary"
              :to="{
                name: 'album-view',
                params: {
                  albumId: props.item.id,
                },
              }">
              View
            </v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="cyan">
            No item in your cart..
          </v-alert>
        </template>
      </v-data-table>
      <h3 class="ml-3 mt-2">Total: {{ calcTotalPrice }}</h3>
    </v-flex>
    <v-flex ml-4>
      <h2>Checkout Information</h2>
      <div class="error" v-html="error" />
        <v-text-field
          mask="credit-card"
          label="Card Number"
          v-model="cardnumber"
          prepend-icon="lock"
          required
        ></v-text-field>
        <v-text-field
          type="date"
          label="Expiration Date"
          v-model="expirationdate"
          prepend-icon="lock"
          required
        ></v-text-field>
        <v-text-field
          label="CVC/CVV"
          v-model="cvc"
          prepend-icon="lock"
          required
        ></v-text-field>
        <v-textarea
          label="Shipping Address"
          v-model="user.address"
          prepend-icon="home"
        ></v-textarea>
        <v-btn color="primary" @click="purchase">Confirm Purchase</v-btn>
    </v-flex>
  </v-layout>
  <v-dialog
    v-model="dialog"
    max-width="290">
    <v-card>
      <v-card-text>
        Purchase Successfully! Thank you!
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          flat="flat"
          @click="redirect">
          Back to Homepage
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
</v-container>
</template>

<script>
import { mapState } from 'vuex';
import CartService from '@/services/Carts';
import currency from '@/filters/currency';
import PurchaseHistory from '@/services/Purchase';

export default {
  data() {
    return {
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Price', value: 'price' },
        { text: 'Actions', value: 'name', sortable: false },
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true,
      },
      albums: [],
      error: null,
      dialog: false,
    };
  },
  methods: {
    async purchase() {
      try {
        const response = (await PurchaseHistory.purchase({
          albums: this.albums,
          user: this.user,
        })).data;
        if (response) {
          this.dialog = true;
          this.error = null;
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    async deleteItem(item) {
      const index = this.albums.indexOf(item);
      try {
        await CartService.delete(item.itemId);
        this.albums.splice(index, 1);
      } catch (err) {
        console.log(err); // eslint-disable-line no-console
      }
    },
    getPrice(price) {
      return currency.format(price / 100);
    },
    redirect() {
      this.dialog = false;
      this.$router.push('/');
    },
  },
  computed: {
    ...mapState({
      isUserLoggedIn: state => state.auth.isUserLoggedIn,
      user: state => state.auth.user,
    }),
    calcTotalPrice() {
      const sum = this.albums.reduce((acc, n) => {
        acc.price += n.price;
        return acc;
      }, { price: 0 });
      return this.getPrice(sum.price);
    },
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.albums = (await CartService.index()).data;
    }
  },
};
</script>

<style scoped>
</style>
