export default {
  widgets: [
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
                  buildHookId: '6000d8f4301e10176e06e9df',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-k7sb26q4',
                  apiId: 'f66029b6-33f1-4939-b623-6d59200aab9e'
                },
                {
                  buildHookId: '6000d8f4301e10110406ec1c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-txja1e5g',
                  apiId: '60f0053f-115c-4ad7-9ff8-0601cbbb824c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HeyMarcy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-txja1e5g.netlify.app', category: 'apps'}
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
