<template>
  <div class="products">
    <div class="product" v-for="item in products" :key="item.node.id">
        <g-link :to="`product/${item.node.handle}`" class="product-link">
          <g-image
            :src="item.node.images[0].src"
            :alt="item.node.images[0].altText || item.node.title"
            class="thumbnail"
          />
          <h3 class="product-title">{{ item.node.title }}</h3>
        </g-link>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}
.product {
  grid-column: auto / span 2;
  text-align: center;
}
.product-link {
  text-decoration: none;
}
.thumbnail {
  height: 560px;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0,0,0,0.25);
}
.product-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem 0;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}
.product:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
}

@media (min-width: 920px) {
  .product {
    grid-column: auto / span 1;
  }
  .product:nth-child(3n+1) {
    grid-column: auto / span 2;
  }
}

</style>
