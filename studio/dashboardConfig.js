export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e7674b008cbd05e6e811694',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-cpr8y8qw',
                  apiId: 'a3b6b6f0-2ecf-4ce8-b849-10b04589a15b'
                },
                {
                  buildHookId: '5e7674b190508d4656a1fde7',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-i8518hvb',
                  apiId: '25384f23-80c5-48ea-b3ea-9e0dc9a997dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vidibor/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-i8518hvb.netlify.com', category: 'apps'}
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
