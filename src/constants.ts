import WorkplaceInfo from './classes/workplaceInfo';

import me_md from './static/contentFiles/me.md'
import toast_md from './static/contentFiles/toast.md'
import revel_md from './static/contentFiles/revel.md'
import equifax_md from './static/contentFiles/equifax.md'
import skillset_md from './static/contentFiles/skillset.md'
import portrait from './static/contentFiles/me.jpg'
import resume from './static/contentFiles/Mishuk-Dutta-Resume.pdf'

const toastInfo = new WorkplaceInfo('Toast', toast_md)
const revelInfo = new WorkplaceInfo('Revel', revel_md)
const equifaxInfo = new WorkplaceInfo('Equifax', equifax_md)



export {
    me_md, toast_md, skillset_md, resume,
    portrait,
    toastInfo, revelInfo, equifaxInfo
}