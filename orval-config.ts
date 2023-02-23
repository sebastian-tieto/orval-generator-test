const config = {
   tdsDevops: {
     output: {
       mode: 'tags-split',
       target: 'src/tds-api.ts',
       schemas: 'src/model',
       client: 'react-query',
       mock: true,
     },
     input: {
       target: 'https://pubdev.tds.tieto.com/portal/rest-api/v2/api-docs',
     },
      hooks: {
        afterAllFilesWrite: [
          `prettier --write`,
        ],
    },
   },
 };

 export default config;