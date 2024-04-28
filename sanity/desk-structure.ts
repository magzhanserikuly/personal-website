import { type StructureResolver } from 'sanity/structure';
import {
  UserIcon,
  CaseIcon,
  LaunchIcon,
  RocketIcon,
  BillIcon,
} from '@sanity/icons';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export const myStructure: StructureResolver = (S, context) =>
  S.list()
    .title('PERSONAL WEBSITE ADMIN PANEL')
    .items([
      S.listItem()
        .title('ABOUT ME')
        .icon(UserIcon)
        .id('about')
        .child(
          S.editor().title('ABOUT ME').schemaType('about').documentId('about')
        ),
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
