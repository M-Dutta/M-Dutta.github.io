import WorkplaceInfo from './classes/workplaceInfo';

/* eslint-disable  @typescript-eslint/no-var-requires */
const me_md = require("./contentFiles/me.md")
const toast_md = require("./contentFiles/toast.md")
const revel_md = require("./contentFiles/revel.md")
const equifax_md = require("./contentFiles/equifax.md")
const skillset_md = require("./contentFiles/skillset.md")
const portrait = require("./contentFiles/portrait.jpg")
/* eslint-enable  @typescript-eslint/no-var-requires */

const toastInfo = new WorkplaceInfo('Toast', toast_md)
const revelInfo = new WorkplaceInfo('Revel', revel_md)
const equifaxInfo = new WorkplaceInfo('Equifax', equifax_md)



export {
    me_md, toast_md, skillset_md,
    portrait,
    toastInfo, revelInfo, equifaxInfo
}