/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import {
  HomeIcon,
  CaseIcon,
  DocumentIcon,
  PresentationIcon,
  BulbOutlineIcon,
  TiersIcon,
  StarIcon,
  EarthGlobeIcon,
  EarthAmericasIcon,
  CalendarIcon,
  MenuIcon,
  BillIcon,
  EyeOpenIcon,
  EnvelopeIcon,
  FolderIcon,
  FilterIcon,
} from '@sanity/icons';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S) => {
        return S.list()
          .title('PERSONAL WEBSITE ADMIN PANEL')
          .items([
            S.listItem()
              .title('ABOUT ME')
              .icon(HomeIcon)
              .id('about')
              .child(
                S.editor()
                  .title('ABOUT ME')
                  .schemaType('about')
                  .documentId('about')
              ),
            S.listItem()
              .title('CV')
              .icon(DocumentIcon)
              .id('cv')
              .child(S.editor().title('CV').schemaType('cv').documentId('cv')),
            S.listItem()
              .title('PROJECTS')
              .icon(DocumentIcon)
              .child(
                S.documentTypeList('projects')
                  .title('PROJECTS')
                  .schemaType('projects')
              ),
            S.listItem()
              .title('CONTACTS')
              .icon(CaseIcon)
              .id('contacts')
              .child(
                S.editor()
                  .title('CONTACTS')
                  .schemaType('contacts')
                  .documentId('contacts')
              ),
          ]);
      },
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
