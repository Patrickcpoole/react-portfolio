export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string"
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "company",
      tilte: "Company",
      type: "text",
    },
    {
      name: "linkToWebsite",
      title: "Link To Website",
      type: "url"
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean"
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{type: "reference", to: {type: "skill"}}]
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{type: "string"}]
    }
  ],
}
