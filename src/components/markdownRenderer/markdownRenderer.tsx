import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import { Container, makeStyles, Box } from '@material-ui/core';


interface Props {
    markdownFile: string;
    header?: string;
    backgroundColor?: string
}

const styles = makeStyles({
    header: {
        textAlign: 'start',
        fontFamily: 'monospace !important',
    },
    markdown: {
        textAlign: 'start',
        fontFamily: 'monospace',
        padding: '10px 25px 10px 25px',
        borderRadius: '25px'
    }
})

const MarkdownRenderer: React.FC<Props> = ({ markdownFile, header, backgroundColor }) => {
    const style = styles()
    const [mdContent, setMarkdownContent] = useState('');
    useEffect(() => {
        fetch(markdownFile).then(response => { return response.text() }).then(text => setMarkdownContent(text))
    })

    return (
        <React.Fragment>

            <Container style={{ textAlign: 'start' }}>
                <h2 className={style.header}>{header}</h2>
            </Container>
            <Container>
                <Box className={style.markdown} style={{ backgroundColor: backgroundColor ? backgroundColor : 'whitesmoke' }}>
                    <Markdown children={mdContent}/>
                </Box>
            </Container>
        </React.Fragment >
    );
}

export default MarkdownRenderer;