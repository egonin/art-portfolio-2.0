import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import '@fontsource/abril-fatface';
import { styled } from '@mui/material/styles';
import "./header.css";


function Header({ selectedView, setSelectedView }) {
    const [value, setValue]=useState(selectedView);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSelectedView(newValue);
        console.log(newValue)
      };

    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    marginRight: theme.spacing(1),
    textTransform: 'none',
    fontFamily: 'Abril Fatface',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 20
    }));

    return (
      <div className="header-container">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="header">
              <StyledTab label="home" value={"home"} />
              <StyledTab label="portfolio" value={"portfolio"}/>
              <StyledTab label="gallery" value={"gallery"}/>
              <StyledTab label="about me" value={"about me"}/>
              <StyledTab label="contact" value={"contact"}/>
          </Tabs>
      </Box>
    </div>
  )
}


export default Header;
