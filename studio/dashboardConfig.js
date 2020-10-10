export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f820743b8a91f2bfc2a5682',
                  title: 'Sanity Studio',
                  name: 'jamstackpress-studio',
                  apiId: '723d50c0-5242-47a4-beba-c45bcde37415'
                },
                {
                  buildHookId: '5f8207439559f955fc1b59b0',
                  title: 'Blog Website',
                  name: 'jamstackpress',
                  apiId: 'a62f3303-4fba-4c9c-a225-21beb46133f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/broeker/jamstackpress',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jamstackpress.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
