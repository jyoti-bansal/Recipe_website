import React from 'react'
import Layout from '../components/Layout'
import AllRecipe from '../components/AllRecipe'

const Recipes = () => {
  return (
    <Layout>
      <main className='page'>
        <AllRecipe/>
      </main>
    </Layout>
  )
}

export default Recipes