import { Request, Response} from 'express'
import knex from '../database/connection';

export default class ItemsController{
 async index(req: Request, res: Response) {
  const items = await knex('items').select('*');

  const serialiazedItems = items.map(item => {
   return {
    id: item.id,
    title: item.title,
    image_url: `http://localhost:3333/files/${item.image}`
   }
  })
  return res.json(serialiazedItems);
 }
}
