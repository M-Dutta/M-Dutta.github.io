import React, { useEffect, useState } from 'react';
import { Box, Container, Slide, makeStyles } from '@material-ui/core';
import WorkplaceInfo from '../../classes/workplaceInfo';
import MarkdownRenderer from '../markdownRenderer/markdownRenderer'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const styler = makeStyles({
    header: {
        textAlign: 'start',
        fontFamily: 'monospace'
    },
    accordionRoot: {
        backgroundColor: "#fff0 !important",
        '&::before': {
            height: '0 !important'
        }
    },
    accordionSummary: { backgroundColor: "#f5f5dc99! important", marginTop: '10px !important', minHeight: 'unset !important' },
    accordionDetails: { margin: '0', padding: '0 0 10px 0 !important' }
})


interface AnimatedMarkdownRendererProps {
    workplaceInfo: WorkplaceInfo;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
const AnimatedMarkdownRenderer: React.FC<AnimatedMarkdownRendererProps> = ({ workplaceInfo }) => {
    const [displayed, setDisplayed] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => { setDisplayed(true) }, 200)
        return () => { setDisplayed(false); clearTimeout(timeout) }
    }, [workplaceInfo])

    return (
        <Slide direction="up" in={displayed} mountOnEnter unmountOnExit timeout={{ enter: 200, exit: 0 }}>
            <Box>
                <MarkdownRenderer markdownFile={workplaceInfo.infoFile} backgroundColor='rgb(253 245 230 / 67%)' />
            </Box>
        </Slide>
    )
}

interface PlacesWorkedProps {
    workplacesInfo: WorkplaceInfo[];
}

const PlacesWorked: React.FC<PlacesWorkedProps> = ({ workplacesInfo }) => {

    const styles = styler()

    return (
        <React.Fragment>
            <Container className={styles.header}>
                <h1>Places I have worked at</h1>
            </Container>
            {
                workplacesInfo.map(workplaceInfo =>
                    <Accordion disableGutters elevation={0} className={styles.accordionRoot} key={workplaceInfo.name}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} className={styles.accordionSummary}>
                            <h3 style={{ margin: '0' }}> {workplaceInfo.name}</h3>
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>
                            <MarkdownRenderer markdownFile={workplaceInfo.infoFile}
                                backgroundColor='rgb(253 245 230 / 67%)' />
                        </AccordionDetails>
                    </Accordion>
                )
            }

        </React.Fragment >
    );
}

export default PlacesWorked;

