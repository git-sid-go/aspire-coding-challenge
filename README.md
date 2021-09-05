# Aspire Fin-Tech Vue.js Coding Challenge.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## [Live Demo](https://road-to-aspire.netlify.app/) deployed on Netlify

## Features Implemented
1. #### Scroll animation - Sticky scroll on the cards screen as per the design. It could have been made more intuitive using a package like ScrollMagic.
2. #### Cards carousel - On the mobile view design, the next card is partially visible. However, it is not visible in the actual implementation. The Qasar component had a limitation on showing multiple slides in the view port. One possible override is to use the carousel-control slot. Also, the navigation dots are inside the card and could not be moved outside in alignemnt with the design.
3. #### Show/Hide card number - This is working but the touch slop should be increased on mobile. The active tap area is quite small.
4. #### Expand/Collapse for Recent Transactions and Card Details - Placeholder text is added for card details.
5. #### Auth guards for protected routes - The loan screens could not be accessed before registration and having an user object in state.



## Pending Features
1. #### Mock API calls for the code challenge - Created a Promise with a timeout to mimic async requests.
2. #### Confirmation popup with amount for term repayment on the code challenge - Tried multiple approaches with both composition API and Vuex state. The Qasar dialog component would not react to the state change. Need to dig more into this.
3. #### Vuex persisted state for maintaining state (especially auth state) across sessions/reloads.



## Plugins / Packages / Frameworks Used
1. #### [Tailwind CSS](https://tailwindcss.com/) for all of the styling done on the app.
2. #### Qasar (for "My Cards" [Carousel](https://quasar.dev/vue-components/carousel) and "Transactions" and "Card Details" [Expansion Items](https://quasar.dev/vue-components/expansion-item#introduction))
3. #### [date-fns](https://date-fns.org/) for getting the months interval on the code challenge. Also helped with formatting the month.
4. #### [vee-validate](https://vee-validate.logaretm.com/v4/) for validating the forms on the code challenge.
5. #### [Vuex](https://vuex.vuejs.org/) for global state management on the code challenge.
6. #### [vue-router](https://router.vuejs.org/) for navigation.
