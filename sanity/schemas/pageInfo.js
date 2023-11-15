export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "about",
      title: "About",
      type: "string"
    },
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "heroImage",
      tilte: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "aboutImage",
      title: "aboutImage",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "typewriter",
      title: "Typewriter",
      type: "array",
      of: [{type: "string"}]
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "address",
      title: "Address",
      type: "string"
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{type: "reference", to: {type: "social"}}]
    }
  ],
}
