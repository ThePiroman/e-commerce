import {httpApiRoot} from "./ApiRoot";
import { defineEventHandler } from 'h3';

// дубль для проверки со стороны серва
const response = await httpApiRoot.products().get({queryArgs: {limit: 1}}).execute();
const thing = response.body.results.map(product => {
    
    const curr = product.masterData.current;
    const masterVar = curr.masterVariant;

    return {
      name: curr.name['en-US'],
      description: curr.description?.['en-US'],
      image: masterVar.images?.[0]?.url
  }
});

console.log(thing)

export default defineEventHandler(async() => {
    const response = await httpApiRoot.products().get({queryArgs: {limit: 20}}).execute();
    return response.body.results.map(product => {
    
      const curr = product.masterData.current;
      const masterVar = curr.masterVariant;

      return {
        name: curr.name['en-US'],
        description: curr.description?.['en-US'],
        image: masterVar.images?.[0]?.url
      }
  });
})