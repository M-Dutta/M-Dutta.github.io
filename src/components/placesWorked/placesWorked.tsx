import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Slide, makeStyles } from '@material-ui/core';
import { Selector } from './selector'
import WorkplaceInfo from '../../classes/workplaceInfo';
import MarkdownRenderer from '../markdownRenderer/markdownRenderer'


const styles = makeStyles({
    header: {
        textAlign: 'start',
        fontFamily: 'monospace'
    },
    rootStyle: {
        textAlign: 'start',
        borderRadius: '10px'
    }
})
// clickHandler is MouseEventHandler but typescript is fucky
// eslint-disable-next-line  @typescript-eslint/ban-types 
function selectorGridItem(workplacesInfo: WorkplaceInfo, selectedWorkspaceName: string, clickHandler?: Function) {
    return <Grid item key={workplacesInfo.name}>
        <Selector
            workplacesInfo={workplacesInfo}
            selectedWorkspaceName={selectedWorkspaceName}
            clickHandler={clickHandler}>
        </Selector>
    </Grid>
}

interface AnimatedMarkdownRendererProps {
    workplaceInfo: WorkplaceInfo;
}

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

    const style = styles()
    // States
    const [workplaceSelected, setWorkplaceSelected] = useState(workplacesInfo[0]);


    function changeSelectedWorkplace(_: React.MouseEvent<HTMLButtonElement, MouseEvent>, workplaceInfo: WorkplaceInfo) {
        setWorkplaceSelected(workplaceInfo)
    }

    return (
        <React.Fragment>
            <Container className={style.header}>
                <h1>Places I've worked at</h1>
            </Container>
            <Container>
                <Grid container>
                    {workplacesInfo.map(workplaceInfo =>
                        selectorGridItem(workplaceInfo, workplaceSelected.name, changeSelectedWorkplace))}
                </Grid>
            </Container>
            <AnimatedMarkdownRenderer workplaceInfo={workplaceSelected} />


        </React.Fragment >
    );
}

export default PlacesWorked;

