<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProductsGrid :products="featuredProducts" />
    </div>
  </Layout>
</template>

<page-query>
query ShopifyProducts {
  allShopifyCollection (limit: 1) {
    edges {
      node {
        id
        handle
        title
        descriptionHtml
        image {
          altText
          src: transformedSrc(maxWidth: 800, maxHeight: 800, crop: CENTER)
        }
      }
    }
  }
  allShopifyProduct (limit: 6) {
    edges {
      node {
        id
        title
        handle
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount(format: true)
          }
        }
        images (limit: 1) {
          id
          altText
          src: transformedSrc (maxWidth: 400, maxHeight: 300, crop: CENTER)
        }
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import ProductsGrid from "@/components/ProductsGrid"

export default {
  components: {
    Hero,
    ProductsGrid,
  },

  computed: {
    collection () { return this.$page.allShopifyCollection.edges.length && this.$page.allShopifyCollection.edges[ 0 ].node },
    featuredProducts () { 
      console.log(this.$page.allShopifyProduct.edges)
      return this.$page.allShopifyProduct.edges 
    }
  }

}
</script>
