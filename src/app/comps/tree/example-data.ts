/** Example file/folder data. */
export const files = [
  {
    name: 'components',
    type: 'folder',
    children: [
      {
        name: 'comps',
        type: 'folder',
        children: [
          { name: '/lazy', type: 'route' },
          {
            name: 'table with shit',
            type: 'folder',
            children: [
              { name: '/myorgchart/111', type: 'route' },
              { name: '/wtf/111', type: 'route' },
              { name: 'obbservab;e', type: 'file' },
            ]
          },
          { name: 'material', type: 'folder' }
        ]
      },

      { name: '/root', type: 'route' }
      ,
      {
        name: 'src',
        type: 'folder',
        children: [
          {
            name: 'cdk',
            type: 'folder',
            children: [
              { name: 'package.json', type: 'file' },
              { name: 'BUILD.bazel', type: 'file' },
            ]
          },
          { name: 'material', type: 'folder' }
        ]
      }
    ]
  },
  {
    name: 'angular',
    type: 'folder',
    children: [
      {
        name: 'packages',
        type: 'folder',
        children: [
          { name: '.travis.yml', type: 'file' },
          { name: 'firebase.json', type: 'file' }
        ]
      },
      { name: 'package.json', type: 'file' }
    ]
  },
  {
    name: 'The Store',
    type: 'folder',
    children: [
      { name: 'gulpfile.js', type: 'file' },
      { name: 'README.md', type: 'file' }
    ]
  }
];
