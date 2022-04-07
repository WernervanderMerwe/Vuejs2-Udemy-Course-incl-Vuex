import ProductList from "./ProductList.vue";
import Cart from "./Cart.vue";
import ViewProduct from "./ViewProduct.vue";
import Product from "./Product.vue";
import ProductReviews from "./ProductReviews.vue";

export default [
  // LEGACY ROUTES
  {
    path: "/products/:productId/view",
    redirect: { name: "viewProduct" } /*"/products/:productId"*/,
  },
  // /LEGACY ROUTES

  { path: "", component: ProductList },
  {
    path: "/products/:productId",
    props: true, // linked to the commented out code in ViewProduct.vue
    name: "product",
    component: Product,
    children: [
      {
        path: "details",
        name: "viewProduct",
        props: true,
        component: ViewProduct,
      },
      {
        path: "reviews",
        name: "productReviews",
        props: true,
        component: ProductReviews,
      },
    ],
  },
  { path: "/cart", component: Cart, alias: "/shopping-cart" },
  { path: "*", component: { template: "<h1>Page Not Found</h1>" } },
];
