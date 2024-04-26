import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import WorkplaceInfo from '../../classes/workplaceInfo';


interface SelectorProps {
    workplacesInfo: WorkplaceInfo;
    selectedWorkspaceName: string;
    clickHandler?: Function;
}


const Selector: React.FC<SelectorProps> = ({ workplacesInfo, selectedWorkspaceName, clickHandler }) => {
    const [selected, setSelected] = useState(workplacesInfo.name === selectedWorkspaceName) // TODO: Use this to underline
    const style = { fontFamily: 'monospace', fontWeight: 'bold', textDecoration: selected? 'underline': null} // TODO: Use this to underline
    
    useEffect(() => {
        setSelected(workplacesInfo.name === selectedWorkspaceName)
    });

    return (
        <Button name={workplacesInfo.name}
            onClick={(event) => clickHandler ? clickHandler(event, workplacesInfo) : null}
            variant='text' size='medium' style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
            {workplacesInfo.name}
        </Button>
    );
}

export { Selector }