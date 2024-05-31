export default {
    name: 'myBooksData',
    title: 'myBooksData',
    type: 'document',
    fields: [
      {
        name: "novels",
        type:"array",
        title: "novels",
        validation:(Rule)=>Rule.required(),
      of:[{type:"reference",to: [{type:"novels"}]}],
      },
        

    ],
  };
  // *[_type=="featured" && _id=='645899ce-0e3a-478b-a76d-a33236fdf9d8']{
  //   ...,
  //   restraunts[]->{
  //     ...,
  //     dishes[]->,
  //     type->{
  //       name
  //     }
  //   },
  // }[0]

  // *[_type=="myBooksData" ]{
  //   ...,
  //   novels[]->{
  //     ...,
  //   },
  // }[0]
