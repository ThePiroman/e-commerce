export async function fetchSingleProduct(productId : string | string[] | undefined) {
  const runtimeConfig = useRuntimeConfig();

  const address = runtimeConfig.public.fetchAddress + '/products/' + productId;

  const { data: product, error, pending } = await useFetch<ProductDetail>(address);

  return {product, error, pending};
}

export async function fetchProducts() {
  const runtimeConfig = useRuntimeConfig();

  const address = runtimeConfig.public.fetchAddress + '/products';

  const { data: products, error, pending } = await useFetch<ProductCard>(address);

  return {products, error, pending};
}