export default {
    name: "novels",
    title: "novels",
    type: "document",
    fields: [
      {
        name: "id",
        type: "number",
        title: "id",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "pageNo",
        type: "number",
        title: "pageNo",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "bookName",
        type: "string",
        title: "bookName",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "language",
        type: "string",
        title: "language",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "readed",
        type: "string",
        title: "readed",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "backgroundColor",
        type: "string",
        title: "backgroundColor",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "navTintColor",
        type: "string",
        title: "navTintColor",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "urlwt",
        type: "string",
        title: "urlwt",
    
      },
      {
        name: "link",
        type: "string",
        title: "link",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        type: "string",
        title: "description",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "author",
        type: "string",
        title: "author",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "genre",
        type: "array",
        title: "genre",
        of:[{type:'string'}],
        validation: (Rule) => Rule.required(),
      },
      {
        name: "bookCover",
        type: "image",
        title: "bookCover",
      },
      {
        name: "rating",
        type: "number",
        title: "rating",
        validation:(Rule)=>
        Rule.required()
      },
      {
        name: "completion",
        type: "string",
        title: "completion",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "lastRead",
        type: "string",
        title: "lastRead",
        validation: (Rule) => Rule.required(),
      },
    ]
  };
  