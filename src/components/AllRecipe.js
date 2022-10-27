import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import {graphql,useStaticQuery} from "gatsby";

const query = graphql`
  query {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          children {
            id
          }
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const AllRecipe = () => {
    const data=useStaticQuery(query);
    const recipes=data.allContentfulRecipe.nodes

  return (
    <section className='recipes-container'>
        
        <TagsList recipes={recipes}/>
        <RecipesList recipes={recipes}/>
    </section>

  )
}

export default AllRecipe