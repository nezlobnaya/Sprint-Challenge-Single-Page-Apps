import React from "react";
import LocationsList from './LocationsList.js';
import WelcomePage from './WelcomePage.js';
import CharacterList from './CharacterList.js';
import EpisodeList from './EpisodeList.js';
import { Tab, Icon } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

    const panes = [
        {menuItem: 'Home', render: () => <WelcomePage  attached={false}  />},
        {menuItem: 'Locations', render: () => <LocationsList  attached={false} />},
        {menuItem: 'Characters', render: () => <CharacterList  attached={false} />},
        {menuItem: 'Episodes', render: () => <EpisodeList  attached={false} />},

    ]

    const TabNav = () => <Tab menu={{ pointing: true }} panes={panes} />

   export default TabNav