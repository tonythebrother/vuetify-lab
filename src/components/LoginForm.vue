<template>
  <v-container>
    <v-row class="text-center">
      <v-col> 
        <v-card class="pa-5 rounded-lg">
          <v-form ref="form" lazy-validation>
            <h1>Log In</h1>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              type="email"
              required
            ></v-text-field>

            <v-text-field
              v-model="pass"
              :rules="passRules"
              label="Password"
              type="password"
              required
            ></v-text-field>

            <v-btn
              color="primary"
              class="mr-4 mt-5"
              @click="logIn"
            >
              Log In
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import func from 'vue-editor-bridge';
export default {
  data: () => ({
    pass: "",
    passRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 8) || "Password must have more than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    logIn() {
      if (this.$refs.form.validate()) {
        this.$router.push({path: 'home', params: {userName: this.email}});
        window.localStorage.setItem('isOnline', true);
      }
    }
  }

};
</script>
