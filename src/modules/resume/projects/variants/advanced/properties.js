import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.iceWhite,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Projects',
    required: true
  },
  projects: {
    name: 'Projects',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Project',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          name: {
            name: 'Project name',
            type: propertyTypes.STRING,
            value: 'Project name',
            required: true
          },
          company: {
            name: 'Company',
            type: propertyTypes.STRING,
            value: 'Company',
            required: true
          },
          designation: {
            name: 'Designation',
            type: propertyTypes.STRING,
            value: 'Designation',
            required: true
          },
          dateTo: {
            name: 'DateTo',
            type: propertyTypes.DATE,
            value: 'StartDate',
            required: true
          },
          dateFrom: {
            name: 'DateFrom',
            type: propertyTypes.DATE,
            value: 'EndDate',
            required: true
          },
          techStack: {
            name: 'Technology-Used',
            type: propertyTypes.STRING,
            value: 'Technology-Used:',
            required: true
          },
          url: {
            name: 'GithubLink',
            type: propertyTypes.URL,
            value: 'https://your-github-url.com',
            required: false
          },
          description: {
            name: 'Description',
            type: propertyTypes.ARRAY,
            value:['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
            required: false
          }
        }
      }
    ]
  }
};

export default properties;
