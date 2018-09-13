# BEW @ Make School: Ideas

_**Fleshed out ideas in bold. Once written and formalized, add a checkmark next to the idea, and add a link to the final content.**_

## Class Topics

### RESTful Routes and Resources

- [ ] History of the Web
- [ ] [MongoDB Schema Basics](http://learnmongodbthehardway.com/schema/schemabasics/)

---

### Authentication, Assocaitions, and Advanced Queries

- [ ] Benchmarking Backend Performance

- [ ] Progressive Tooling

  * Third party tools that can be used to improve page performance
  * See [website](https://progressivetooling.com/) for more info.

- [ ] Design Patterns in Node.js

- [ ] Docsify - Generating Custom API Documentation

- [ ] MongoDB Patterns and Practice

  - [ ] [Schema Design](http://learnmongodbthehardway.com/schema/schemadesign/)

  - [ ] [Metadata Schema](http://learnmongodbthehardway.com/schema/metadata/)
    Metadata is data that describes and provides information about other data. A classic example is the information about a digital photo, such as the ISO settings, resolution, pixel depth, exposure, camera settings, camera type and so on.

  - [ ] [Shopping Cart - No Product Reservation - Amazon Style](http://learnmongodbthehardway.com/schema/shoppingcartnoreservation/)
    This shopping cart schema more closely resembles the amazon shopping cart. When you add products to the cart, they are not reserved. The actual check for product inventory is only performed when the user checks out the cart.

  - [ ] [Theater Reservation Schema](http://learnmongodbthehardway.com/schema/theater/)

    This schema pattern is based around the concept of buying tickets for a theater. It's a reservation-based schema where the user can pick their own seats and theater session, and the seats are reserved until the user either checks out the cart or the cart expires. It's a variation of the e-commerce shopping cart for reservations, but has some unique twists to it that makes it a useful pattern to know.

- [ ] MongoDB Atlas - Database as a Service

- [ ] **Nested Express Routes + Complex MongoDB Associations**:
  Create a RESTful API with nested routes but no endpoint definition or persistence. Students should:

  1. Draw the architecture on a whiteboard or in your notes before starting.
  2. Initialize the database and connect Node via Mongoose.
  3. Create the Mongoose model(s) required in order to query MongoDB.
  4. Implement the resource stubs using Mongoose methods to persist data.
  5. Test persistance and validate that data is properly retreived, created, updated, or deleted for each endpoint.

---

### Advanced Web Security

- [ ] **Keeping Secrets Safe: `dotenv` in Action**:
  Integrate `dotenv` into a RESTful API implementation. Show `dotenv` integrated in a myriad of platforms: Django, Node, Rails, etc. Finally, deploy to Heroku without exposing secrets in a public GitHub repository.
- [ ] **Rolling a Strong Password with 20 Sided Dice**
  * See the EFF instructions [here](https://www.eff.org/deeplinks/2018/08/dragon-con-diceware)

---

### DevOps

- [ ] Git Hooks
- [ ] Advanced Heroku Deployment
- [ ] Amazon S3 - Setup and Deployment
- [ ] Amazon AWS - Setup and Deployment
- [ ] Dokku - How to Build Your Very Own Heroku Server
- [ ] Deploying API Documentation on GitHub Pages
- [ ] Serverless Framework
- [ ] Creating Personal Data-Driven Dashboards
  - [ ] [VuDash](http://vudash.com/#/)
- [ ] Chatbots / Slack Integrations
- [ ] CircleCI / Travis
- [ ] Writing Effective READMEs/CHANGELOGs
- [ ] Implementing a Custom URL Shortener
- [ ] Automated Test Server Implementation

---

## Huddles / Warm Up Topics

- [ ] The Tao of Programming: [click](http://www.mit.edu/~xela/tao.html)
- [ ] Programmer Quotes: [click](../meta/quotes-about-programming.md)
- [ ] IDE Tricks
- [ ] Syntax Tricks
