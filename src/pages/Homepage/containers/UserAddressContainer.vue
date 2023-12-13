<!-- @format -->

<template>
  <BaseLayout>
    <div class="home-container">
      <SideMenuVue />
      <FormContentVue>
        <div class="container">
          <Form @submit="onSubmit">
            <Field name="email" type="email" />
            <button>Sign up for newsletter</button>
          </Form>

          <Form @submit="onSubmit">
            <div class="billing">
              <div>
                <h1>Billing Address</h1>
                <p>The following address will be usedon the checkout page by default</p>
              </div>
              <button class="add">Add</button>
            </div>
            <div class="form">
              <div class="form__div">
                <div class="fill">
                  <p>First Name <span>*</span></p>
                  <Field
                    type="text"
                    name="firstname"
                    v-model="userAddress.firstName"
                    @input="updateField('firstName', $event.target.value)"
                    :rules="isRequired"
                  />
                  <ErrorMessage id="error__message" name="firstname" />
                </div>
                <div class="fill">
                  <p>Last Name <span>*</span></p>
                  <Field
                    type="text"
                    name="lastname"
                    id="lastname"
                    v-model="userAddress.lastName"
                    @input="updateField('lastName', $event.target.value)"
                    :rules="isRequired"
                  />
                  <ErrorMessage id="error__message" name="lastname" />
                </div>
              </div>
              <div class="form__div">
                <div class="fill">
                  <p>Country / Region <span>*</span></p>
                  <Field
                    type="text"
                    name="country"
                    id="country"
                    v-model="userAddress.country"
                    @input="updateField('country', $event.target.value)"
                    :rules="isRequired"
                  />
                  <ErrorMessage id="error__message" name="country" />
                </div>
                <div class="fill">
                  <p>Town / City <span>*</span></p>
                  <Field
                    type="text"
                    name="town"
                    id="town"
                    v-model="userAddress.townCity"
                    @input="updateField('townCity', $event.target.value)"
                    :rules="isRequired"
                  />
                  <ErrorMessage id="error__message" name="town" />
                </div>
              </div>
              <div class="form__div">
                <div class="fill">
                  <p>Street Address <span>*</span></p>
                  <Field
                    type="text"
                    name="address"
                    id="address"
                    v-model="userAddress.streetAddress"
                    @input="updateField('streetAddress', $event.target.value)"
                    :rules="isRequired"
                  />
                  <ErrorMessage id="error__message" name="address" />
                </div>
                <div class="fill">
                  <p></p>
                  <Field
                    type="text"
                    name="extra"
                    id="extra"
                    placeholder="Appartment, suite, unit, etc. (optional)"
                  />
                </div>
              </div>
              <div class="form__div">
                <div class="fill">
                  <p>State <span>*</span></p>
                  <Field
                    type="text"
                    name="state"
                    id="state"
                    v-model="userAddress.state"
                    @input="updateField('state', $event.target.value)"
                    :rules="isRequired"
                  />
                  <ErrorMessage id="error__message" name="state" />
                </div>
                <div class="fill">
                  <p>Zip <span>*</span></p>
                  <Field
                    type="text"
                    name="zip"
                    id="zip"
                    v-model="userAddress.zip"
                    @input="updateField('zip', $event.target.value)"
                    :rules="isRequired"
                  />
                  <ErrorMessage id="error__message" name="zip" />
                </div>
              </div>
              <div class="form__div">
                <div class="fill">
                  <p>Email address <span>*</span></p>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    :rules="validateEmail"
                    v-model="userAddress.email"
                    @input="updateField('email', $event.target.value)"
                  />
                  <ErrorMessage id="error__message" name="email" />
                </div>
                <div class="fill">
                  <p>Phone number <span>*</span></p>
                  <div class="testDiv">
                    <select
                      v-model="selectedCountry"
                      class="country-code"
                      @change="onCountryChange"
                    >
                      <option value="+998">+998</option>
                      <option value="+998">+998</option>
                      <option value="+994">+994</option>
                    </select>
                    <Field
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      v-model="userAddress.phoneNumber"
                      @input="updateField('phoneNumber', $event.target.value)"
                      :rules="isRequired"
                    />
                    <ErrorMessage id="error__message" name="phoneNumber" />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" class="form__button">Save Address</button>
            <div class="shipping">
              <div class="shipping__info">
                <h6>Shipping Address</h6>
                <p>You have not set up this type of address yet.</p>
              </div>
              <div class="flex items-center">
                <input type="radio" />
                <p>Same as billing</p>
                <button>Add</button>
              </div>
            </div>
          </Form>
        </div>
      </FormContentVue>
    </div>
  </BaseLayout>
</template>

<script>
import { useStore } from 'vuex';
import { Form, Field, ErrorMessage } from 'vee-validate';

import FormContentVue from '../components/FormContent.vue';
import SideMenuVue from '../components/SideMenu.vue';
import BaseLayout from '@/components/Layout';

import '../components/formMicroComponents/style.css';

export default {
  components: {
    SideMenuVue,
    FormContentVue,
    BaseLayout,
    Form,
    Field,
    ErrorMessage,
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
    },
    onSubmit(values) {
      const newData = { ...this.$store.state.userAddress };
      console.log(newData);

      this.$store.commit('clearForm');
    },
    validateEmail(value) {
      if (!value) {
        return 'This field is required';
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      return true;
    },
  },
  setup() {
    const store = useStore();

    const userAddress = store.getters.getUserAddress;

    const updateField = (field, value) => {
      store.commit('updateForm', { field, value });
    };

    return {
      userAddress,
      updateField,
    };
  },
};
</script>
