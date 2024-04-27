import { Grid, makeStyles, Slide } from '@material-ui/core';
import { LinkedInIcon, GitHubIcon, ResumeIcon } from './icons'

const styles = makeStyles((theme) => ({
    SideBar: {
        alignContent: 'baseline',
        justifyContent: 'center',
        position: 'fixed',
        top: 'calc(50% - 42px)',
        right: '1%',
        width: 'fit-content!important',
        borderRadius: '1em',
        zIndex: 1
    },
    [theme.breakpoints.down("sm")]: {
        right: '0%'
    }


}));

export const SideBar = () => {
    const style = styles()
    return (
        <Slide in={true} direction='left' timeout={2000}>
            <Grid container className={style.SideBar} direction='column'>
                <Grid item>
                    <LinkedInIcon />
                </Grid>
                <Grid item>
                    <GitHubIcon />
                </Grid>
                <Grid item>
                    <ResumeIcon />
                </Grid>
            </Grid>
        </Slide>
    )
}