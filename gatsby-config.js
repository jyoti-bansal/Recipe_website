/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"Simple Recipes",
    description:"Nice and clean recipes site",
    author:"@jyotibansal",
    person:{name:"Jyoti",age:22},
    simpleData:["item 1","item 2"],
    complexData:[
      {name:"Jyoti" , age: 22},
      {name:"abhi" , age:21}, 
    ],
  }, 
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
