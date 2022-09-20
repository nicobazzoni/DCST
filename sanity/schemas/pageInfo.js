export default {
  name: 'pageInfo',
  title: 'pageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "HeroImage",
      title: "Image",
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: "BackgroundInformation",
      title: "BackgroundInformation",
      type: "string",
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: 'image',
      options: { 
        hotspot: true,
      },
    },
   
  ],



}
