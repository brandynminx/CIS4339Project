<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Join Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                data-cy="joinEmailField"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                name="password"
                                label="Password"
                                type="password"
                                required
                                v-model="password"
                                :rules="passwordRules"
                                data-cy="joinPasswordField"
                            >
                            </v-text-field>
                            <v-text-field
                                name="displayName"
                                label="Full Name"
                                type="name"
                                required
                                v-model="displayName"
                                :rules="nameRules"
                                data-cy="joinNameField"
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="submit"
                            data-cy="joinSubmitBtn"
                            >Join</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Join',
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            displayName: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v =>
                    v.length >= 6 ||
                    'Password must be greater than 6 characters'
            ],
            nameRules: [
                v => !!v || 'First and Last name are required',
                v=> /.+ +./.test(v) || 'First and last name separated by a space is required'
            ]
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                //console.log('1ST')
                this.$store.dispatch('userJoin', {
                    email: this.email,
                    password: this.password,
                    displayName: this.displayName,
                })
            }
        },
    }
};

</script>

<style scoped></style>