import { httpApiRoot } from '../utils/ApiRoot'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  if (id) {
    const response = await httpApiRoot.products().withId({ID: id}).get({queryArgs: {limit: 1}}).execute()
    const product = response.body;
    const curr = product.masterData.current;
    const masterVar = curr.masterVariant;

    return {
      id: product.id,
      name: curr.name['en-US'],
      price: masterVar.prices?.[0]?.value,
      image: masterVar.images?.[0]?.url
    }

  }

  
    
})

