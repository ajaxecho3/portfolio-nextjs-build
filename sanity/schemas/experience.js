export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: "jobTitle",
      title: "Jobtitle",
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
      title: "Company",
      type: "string",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date"
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date"
    },
    {
      name: "isCurrentLyWorkingHere",
      title: "isCurrentLyWorkingHere",
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
    },


  ],


}
