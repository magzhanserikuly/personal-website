/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import {
  UserIcon,
  CaseIcon,
  LaunchIcon,
  RocketIcon,
  BillIcon,
} from '@sanity/icons';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('PERSONAL WEBSITE ADMIN PANEL')
          .items([
            S.listItem()
              .title('ABOUT ME')
              .icon(UserIcon)
              .id('about')
              .child(
                S.editor()
                  .title('ABOUT ME')
                  .schemaType('about')
                  .documentId('about')
              ),
            // S.listItem()
            //   .title('CV')
            //   .icon(BillIcon)
            //   .child(S.documentTypeList('cv').title('CV').schemaType('cv')),
            orderableDocumentListDeskItem({
              type: 'cv',
              S,
              context,
              title: 'CV',
              icon: BillIcon,
            }),
            orderableDocumentListDeskItem({
              type: 'projects',
              S,
              context,
              title: 'PROJECTS',
              icon: RocketIcon,
            }),
            S.listItem()
              .title('CONTACTS')
              .icon(CaseIcon)
              .icon(LaunchIcon)
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
