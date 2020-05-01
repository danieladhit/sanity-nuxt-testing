export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-testing-studio',
                  apiId: '0d2e8790-7bb2-42b2-a185-9a9ff6068f09'
                },
                {
                  buildHookId: '5eabea18f75dc47cdb75005a',
                  title: 'Events Website',
                  name: 'sanity-nuxt-testing',
                  apiId: '5df9ab1c-3884-439a-96d0-c4c683f62174'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danieladhit/sanity-nuxt-testing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-testing.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
