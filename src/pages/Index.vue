<template>
  <Layout>

    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full text-center sm:text-left">
        <div class="leading-tight">How to build to deploy a <span class="text-green-700">Gridsome Shopify</span> starter.</div>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  computed: {
    collection () { return this.$page.allShopifyCollection.edges.length && this.$page.allShopifyCollection.edges[ 0 ].node },
    featuredProducts () { return this.$page.allShopifyProduct.edges }
  }
}
</script>

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
