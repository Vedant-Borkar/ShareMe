import {schemaTypes} from './schemas'
import { createSchema } from 'sanity'
import user from './user'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user
  ])
})