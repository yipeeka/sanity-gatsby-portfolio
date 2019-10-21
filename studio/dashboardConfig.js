export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dae02fb1175b3019ac8b6d3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ijycs6xf',
                  apiId: 'c416a05a-520d-484d-b469-708cb5737a29'
                },
                {
                  buildHookId: '5dae02fcb3186c019800e6dd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5tdw4yvy',
                  apiId: 'd82072c3-f03d-4648-9155-a5ef832cae6c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yipeeka/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5tdw4yvy.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
