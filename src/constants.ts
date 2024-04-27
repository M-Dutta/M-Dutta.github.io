import WorkplaceInfo from './classes/workplaceInfo';

/* eslint-disable  @typescript-eslint/no-var-requires */
const staticFolder = "./static/contentFiles"
const me_md = require(`${staticFolder}/me.md`)
const toast_md = require(`${staticFolder}/toast.md`)
const revel_md = require(`${staticFolder}/revel.md`)
const equifax_md = require(`${staticFolder}/equifax.md`)
const skillset_md = require(`${staticFolder}/skillset.md`)
const portrait = require(`${staticFolder}/me.jpg`)
const resume = require(`${staticFolder}/Mishuk-Dutta-Resume.pdf`)
/* eslint-enable  @typescript-eslint/no-var-requires */

const toastInfo = new WorkplaceInfo('Toast', toast_md)
const revelInfo = new WorkplaceInfo('Revel', revel_md)
const equifaxInfo = new WorkplaceInfo('Equifax', equifax_md)



export {
    me_md, toast_md, skillset_md, resume,
    portrait,
    toastInfo, revelInfo, equifaxInfo
}