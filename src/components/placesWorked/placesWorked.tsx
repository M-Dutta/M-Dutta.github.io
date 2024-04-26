import React, { useState } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
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

interface SelectorProps {
    workplacesInfo: WorkplaceInfo[];
}

function selectorGridItem(workplacesInfo: WorkplaceInfo, selectedWorkspaceName: string, clickHandler?: Function) {
    return <Grid item key={workplacesInfo.name}>
        <Selector
            workplacesInfo={workplacesInfo}
            selectedWorkspaceName={selectedWorkspaceName}
            clickHandler={clickHandler}>
        </Selector>
    </Grid>
}

const PlacesWorked: React.FC<SelectorProps> = ({ workplacesInfo }) => {
    const style = styles()
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

            <MarkdownRenderer markdownFile={workplaceSelected.infoFile}></MarkdownRenderer>


        </React.Fragment >
    );
}

export default PlacesWorked;

