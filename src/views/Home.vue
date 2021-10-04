<template>
  <div class="home">
    <v-img
      dark
      id="bg"
      max-height="600px"
      src="https://www.teahub.io/photos/full/8-83611_laptop-4k-hd-desktop-wallpaper-for-4k.jpg"
    >
      <img id="me" alt="Vue logo" src="../assets/svg2.png" />
      <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
              <link
                href="https://fonts.googleapis.com/css?family=Chivo:300,700|Playfair+Display:700i"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300"
                rel="stylesheet"
              />
              <div class="display">
                <div id="welcome">Welcome to my page.</div>
                <div id="aboutme">Full-Stack web developer.</div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    <v-container class="mt-5">
      <v-layout wrap>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="about">This is me</div>
        </v-flex>
        <v-flex xs12 mt-5>
          <div class="body-1">{{ aboutText }}</div>
          <div class="body-1 mt-3">
            Working on starting an app development business and always looking
            for new clients! Would love to talk to you about your idea.
          </div>
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="portfolio">My Work</div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <v-layout wrap>
            <template v-for="(app, i) in apps">
              <v-flex :key="i" xs12 sm6 md4>
                <p-portfolio-app :app="app" />
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12 mb-5>
          <div class="display-1 font-weight-bold" id="contact">Contact</div>
        </v-flex>
        <template v-for="(contact, i) in contactLinks">
          <v-flex sm6 md4 xs12 :key="i">
            <p-contact-info :contact="contact" />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PContactInfo from "@/components/PContactInfo.vue";
export default {
  name: "home",
  components: {
    PPortfolioApp,
    PContactInfo,
  },
  data() {
    return {
      aboutText:
        "I'm Khalil, I passed an intensive american program to learn web development that pays attention to both technical and soft skills, I love learning new things and help others in the process, I pay attention to details and make sure that my work is organised and looking good!",
      apps: [
        {
          name: "Tunisia Discovery",
          price: "COMING SOON",
          logo: "app.png",
          platforms: [
            {
              name: "web",
              icon: "mdi-web",
              link: "",
            },
          ],
          description:
            "Tunisia Discovery is a website that is meant to help you discover Tunisia as a touristic destination and help you make your reservations in hotels, car rental agencies and even events tickets.",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-vuejs",
              link: "https://vuejs.org/",
            },
            {
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com/",
            },
            {
              name: "MongoDB",
              icon: "mdi-database",
              link: "https://mongodb.com/",
            },
            {
              name: "Stripe",
              icon: "mdi-credit-card-outline",
              link: "",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "",
          },
        },
        {
          name: "Private Chat",
          price: "COMING SOON",
          logo: "message.jpg",
          platforms: [
            {
              name: "web",
              icon: "mdi-web",
              link: "",
            },
          ],
          description: "Your chats can now be private.",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-vuejs",
              link: "https://vuejs.org/",
            },
            {
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com/",
            },
            {
              name: "Firebase",
              icon: "mdi-firebase",
              link: "https://firebase.google.com/",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "",
          },
        },
        {
          name: "Foodify",
          price: "COMING SOON",
          logo: "foodify.jpg",
          platforms: [
            {
              name: "web",

              icon: "mdi-web",
              link: "",
            },
          ],
          description:
            "Foodify is an application for publishing content related to gastronomy, interact and even join chat rooms.",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-vuejs",
              link: "https://vuejs.org/",
            },
            {
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com/",
            },
            {
              name: "MongoDB",
              icon: "mdi-database",
              link: "https://mongodb.com/",
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: "",
          },
        },
      ],
      contactLinks: [
        {
          name: "Email",
          value: "khalilcharef7@gmail.com",
          link: "mailto:khalilcharef7@gmail.com",
          icon: "mdi-email",
        },
        {
          name: "LinkedIn",
          value: "Khalil Charef",
          link: "https://www.linkedin.com/in/khalil-charef-220b59207/",
          icon: "mdi-linkedin",
        },
        {
          name: "Github",
          value: "KhalilCharef",
          link: "https://github.com/KhalilCharef",
          icon: "mdi-github",
        },
        {
          name: "Facebook",
          value: "Khalil Charef",
          link: "https://www.facebook.com/KhalilSherif7",
          icon: "mdi-facebook",
        },
        {
          name: "Instagram",
          value: "@Khalilshff",
          link: "https://www.instagram.com/khalilshff/",
          icon: "mdi-instagram",
        },
        {
          name: "Phone",
          value: "(+216) 29 67 99 67",
          link: "",
          icon: "mdi-phone",
        },
      ],
    };
  },
};
</script>
<style>
#me {
  position: absolute;
  max-height: 400px;
  max-width: 400px;
  margin-left: 70px;
  margin-top: 70px;
}
#welcome {
  color: rgb(32, 182, 132);
  font-size: 50px;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  font-style: italic;
}
#aboutme {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 50px;
}
.display {
  margin-top: 250px;
}
</style>
