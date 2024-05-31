export default {
    name: 'categoriesData',
    title: 'categoriesData',
    type: 'document',
    fields: [
        {
            name: 'novels',
            title: 'novels',
            type: 'array',
            of:[{type:"reference",to: [{type:"novels"}]}],
           
            
          },
          {
            name: "id",
            type: "number",
            title: "id",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "categoryName",
            type: "string",
            title: "categoryName",
            validation: (Rule) => Rule.required(),
          },

    ],
  };