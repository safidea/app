import type { Component, Page } from '@safidea_/engine/page'
import fs from 'fs-extra'
import type { Translation } from '../../translations'

const SCHEMA_PATH = './node_modules/@safidea_/engine/schemas/app.schema.json'

type JSONSchemaType = 'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string'

interface JSONSchema {
  $id?: string
  $schema?: string
  $ref?: string
  title?: string
  description?: string
  type?: JSONSchemaType | JSONSchemaType[]
  additionalProperties?: boolean | JSONSchema
  required?: string[]
  items?: JSONSchema | JSONSchema[]
  properties?: {
    [key: string]: JSONSchema
  }
  definitions?: {
    [key: string]: JSONSchema
  }
  anyOf?: JSONSchema[]
  enum?: string[]
}

const schema = fs.readJSONSync(SCHEMA_PATH) as JSONSchema

function buildSchemaDocumentation(schema: JSONSchema, title?: string): Component[] {
  const doc: Component[] = []
  if (title) {
    doc.push({
      component: 'Title',
      text: title,
      size: 'sm',
    })
  }
  if (schema.type) {
    doc.push({
      component: 'Paragraph',
      text: 'Type: ' + (Array.isArray(schema.type) ? schema.type.join(', ') : schema.type),
    })
  }
  if (schema.required) {
    doc.push({
      component: 'Paragraph',
      text: 'Required: ' + schema.required.join(', '),
    })
  }
  if (schema.properties) {
    doc.push({
      component: 'Paragraph',
      text: 'Properties:',
    })
    doc.push({
      component: 'Container',
      children: Object.entries(schema.properties)
        .map(([key, value]) => buildSchemaDocumentation(value, key))
        .flat(),
      spacing: 'sm',
    })
  }
  if (schema.$ref) {
    doc.push({
      component: 'Paragraph',
      text: 'Reference: ' + schema.$ref,
    })
  }
  if (schema.items) {
    if (Array.isArray(schema.items)) {
      doc.push({
        component: 'Paragraph',
        text: 'Items:',
      })
      doc.push({
        component: 'Container',
        children: schema.items.map((item) => buildSchemaDocumentation(item)).flat(),
        spacing: 'xs',
      })
    } else {
      doc.push({
        component: 'Paragraph',
        text: 'Items:',
      })
      if (!schema.items.$ref?.includes('Component')) {
        doc.push({
          component: 'Container',
          children: buildSchemaDocumentation(schema.items),
          spacing: 'xs',
        })
      } else {
        doc.push({
          component: 'Paragraph',
          text: 'Component',
        })
      }
    }
  }
  if (schema.anyOf) {
    doc.push({
      component: 'Paragraph',
      text: 'Any of:',
    })
    doc.push({
      component: 'Container',
      children: schema.anyOf.map((item) => buildSchemaDocumentation(item)).flat(),
      spacing: 'xs',
    })
  }
  if (schema.enum) {
    doc.push({
      component: 'Paragraph',
      text: 'Enum: ' + schema.enum.join(', '),
    })
  }
  if (schema.definitions) {
    doc.push({
      component: 'Paragraph',
      text: 'Definitions:',
    })
    doc.push({
      component: 'Container',
      children: Object.entries(schema.definitions)
        .map(([key, value]) => buildSchemaDocumentation(value, key))
        .flat(),
      spacing: 'xs',
    })
  }
  return doc
}

export const engineDocumentation = (t: Translation): Page => ({
  name: 'engine-documentation',
  path: '/engine/documentation',
  head: {
    title: 'Safidea - Engine Documentation',
    metas: [
      {
        name: 'description',
        content: 'Safidea - Engine Documentation',
      },
    ],
  },
  body: [
    {
      component: 'Container',
      children: [
        {
          component: 'Title',
          text: 'Engine Documentation',
        },
        {
          component: 'Paragraph',
          text: 'This documentation provides an overview and detailed descriptions of the JSON schema used to configure the application.',
        },
        ...buildSchemaDocumentation(schema, 'app'),
      ],
    },
  ],
})
