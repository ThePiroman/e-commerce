import { httpApiRoot } from '../utils/ApiRoot'

export default defineEventHandler(async () => {
    const response = await httpApiRoot.products().get({queryArgs: {limit: 20}}).execute()

    return response.body.results.map(product => {
    
      const curr = product.masterData.current;
      const masterVar = curr.masterVariant;

      return {
        id: product.id,
        name: curr.name['en-US'],
        price: masterVar.prices?.[0]?.value,
        image: masterVar.images?.[0]?.url
      }
    })
})

