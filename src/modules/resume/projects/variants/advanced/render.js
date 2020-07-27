import React from 'react'

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 10,
    display: "block",
  },
  headlineText: {
    margin: 0
  },
  projectItem: {
    margin: 0,
    align: screenLeft,
  },
  dateItem: {
    
  }
})



const Advanced = (
  {
    theme,
    headlineText,
    projects
  }
) => {
  const styles = useStyles();

  function renderProject(projectDetails) {
    return <div>
      <h2 style={styles.projectItem}>{projectDetails.name.value}
      </h2>
      <em>{`${projectDetails.company.value} | ${projectDetails.designation.value}`}</em>
      <h4 style={styles.dateItem}>
          {`${projectDetails.dateTo.value}${projectDetails.dateFrom.value ? ` - ${projectDetails.dateFrom.value}` : ''}`}
      </h4>
      <h4 style={styles.projectItem}>
        {projectDetails.techStack.value} 
      </h4>
          {projectDetails.url.value && (
        <span>
          <br />
          <a target="_blank" style={{ color: theme.value.contrast }} href={projectDetails.url.value}>
            <div style={styles.projectItem}>
              Project Link
             </div>
          </a>
          <br />
        </span>
      )
      }
    <ul>
    {[projectDetails.description.value].map(name => <li key={name}> {name}</li>)}
    </ul>
    </div>
  }

  return (
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
      <h1 style={styles.headlineText} >{headlineText.value}</h1>
      <hr />
      {projects.value.map((projectDetails, id) => {
        return <div key={id}>
          <br />
          {renderProject(projectDetails.value)}
        </div>
      })}

    </div>
  );
};

export default Advanced;
