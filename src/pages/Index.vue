<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  },
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
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals,
    collection () { return this.$page.allShopifyCollection.edges.length && this.$page.allShopifyCollection.edges[ 0 ].node },
    featuredProducts () { return this.$page.allShopifyProduct.edges }
  }
}
</script>
