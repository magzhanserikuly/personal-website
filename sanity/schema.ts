import { type SchemaTypeDefinition } from 'sanity';

import about from './schemas/about';
import cv from './schemas/cv';
import contacts from './schemas/contacts';
import projects from './schemas/projects';
import contact from './schemas/contact';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, projects, contact, contacts, cv],
};
