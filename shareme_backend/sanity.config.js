import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { createSchema } from 'sanity'
export default defineConfig({
  name: 'default',
  title: 'ShareMe',

  projectId: 'xp1b8jxd',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,createSchema,
  },
})
