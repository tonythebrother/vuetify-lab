<template>
  <v-row class="ml-10">
    <v-col>
      <h1>Simplified Billing System</h1>
      <v-form ref="form" lazy-validation>
        <v-row class="mb-8">
          <v-col cols="4">
            <v-select
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              label="Item"
              required
            ></v-select>
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="quantity"
              :rules="quantRules"
              label="Quantity"
              type="number"
              required
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-btn color="primary" class="mb-5"> Add Product </v-btn>
        <v-btn color="red" class="ml-4 mb-5"> Remove Product </v-btn>
        <div class="pa-2">
          <h2>Nombre de Tienda</h2>
          <table style="width:100%">
            <tr>
              <td>Sucursal</td>
            </tr>
            <tr>
              <td>Direccion</td>
            </tr>
             <tr>
              <td>RNC</td>
            </tr>
             <tr>
              <td>Autorización de la DGII</td>
            </tr>
            <tr style="text-align: left; border: 1px solid #000;">
              <th>DESCRIPCION</th>
              <th>ITBIS</th>
              <th>VALOR</th>
            </tr>
            <tr >
              <td>producto</td>
              <td>precio*0.18</td>
              <td>precio</td>
            </tr>
          </table>
        </div>
        <v-btn color="success" class="mt-5" @click="validate"> Create bill </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    select: null,
    items: ["Papa LB.", "Platano Und.", "Salami Und.", "Aceite Galon"],
    prices: [25.0, 15.0, 85.0, 60.0],
    quantity: null,
    quantRules: [(v) => !!v || "Quantity is required"],
    products: [],
    quantities: [],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>