import ProductList from "./ProductList.vue";
import Cart from "./Cart.vue";
import ViewProduct from "./ViewProduct.vue";

export default [
  { path: "", component: ProductList },
  {
    path: "/products/:productId",
    props: true, // linked to the commented out code in ViewProduct
    name: "viewProduct",
    component: ViewProduct,
  },
  { path: "/cart", component: Cart },
  { path: "*", component: { template: "<h1>Page Not Found</h1>" } },
];
