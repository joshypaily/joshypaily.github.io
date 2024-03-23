import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


const sections = [
  { title: 'About', url: '/' },
  { title: 'Experience', url: '/experience' },
  { title: 'Projects', url: '/projects' },
  { title: 'Skills', url: '/skills' },
  { title: 'Achievements', url: '/achievements' },
  { title: 'Education', url: '/education' },
  { title: 'Contact', url: '/contact' },
];

const title="Joshy Paily- Senior Software enginner";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
         <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
        <Tabs value={value} onChange={handleChange} 
        textColor="inherit"
        >
          {sections.map((section) => (
            <Tab 
              label={section.title}
              href={section.url}
              key={section.title}
            >
            </Tab>  
          ))}
        </Tabs>
      </Box>
      <Divider  variant="middle" flexItem />
      <br/>
    </Box>
    
  );
}

