import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ClubProgress from '../../components/Club/ClubProgress/ClubProgress';
import './ClubPage.scss';

export default function ClubPage() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="club-progress-accordian">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>
                        Reading progress
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ClubProgress />
                </AccordionDetails>
            </Accordion>
            {/* <ClubProgress /> */}
        </div>
    );
}