import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles'
import IonIcon from '@reacticons/ionicons';
import { resume } from '../../constants'
const linkedInLink = 'https://www.linkedin.com/in/mishukdutta/'
const gitHubLink = 'https://github.com/M-Dutta/'

const iconStyle = makeStyles({
    resize: {
    },
    linkedInIcon: {
        color: '#0b73b1'
    },
    githubIcon: {
        color: '#24292e',

    },
    resumeIcon: {
        color: '#793030',
    }

})

export const LinkedInIcon = () => {
    const style = iconStyle()
    return (
        <IconButton className={style.linkedInIcon} onClick={() => window.open(linkedInLink)}>
            <IonIcon name="logo-linkedin" />
        </IconButton>
    )
}

export const GitHubIcon = () => {
    const style = iconStyle()
    return (
        <IconButton className={style.githubIcon} onClick={() => window.open(gitHubLink)}>
            <IonIcon name="logo-github" />
        </IconButton>
    )
}

export const ResumeIcon = () => {
    const style = iconStyle()
    return (
        <IconButton className={style.resumeIcon} onClick={() => window.open(resume, 'titlebar=Mishuk-resume')}>
            <IonIcon name="document-attach-outline" />
        </IconButton>
    )
}