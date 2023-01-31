/** @jsx jsx */
import { jsx } from "theme-ui"
import { FaLifeRing } from "@react-icons/all-files/fa/FaLifeRing"
import { AiFillCalculator } from "@react-icons/all-files/ai/AiFillCalculator"
import { AiFillDollarCircle } from "@react-icons/all-files/ai/AiFillDollarCircle"
import { VscSymbolMisc } from "@react-icons/all-files/vsc/VscSymbolMisc"
import { VscHome } from "@react-icons/all-files/vsc/VscHome"
import { MdAttachMoney } from "@react-icons/all-files/md/MdAttachMoney"
import { VscCode } from "@react-icons/all-files/vsc/VscCode"
import { VscAccount } from "@react-icons/all-files/vsc/VscAccount"
import { VscTag } from "@react-icons/all-files/vsc/VscTag"
import { ImBlog } from "@react-icons/all-files/im/ImBlog";


const tagIcons = [
  {
    tag: 'life',
    component: <FaLifeRing sx={{m: 'xs', minWidth: '12px', minHeight: '12px'}}/>
  },
  {
    tag: 'math',
    component: <AiFillCalculator sx={{m: 'xs', minWidth: '12px', minHeight: '12px'}} />
  },
  {
    tag: 'finance',
    component: <AiFillDollarCircle sx={{m: 'xs', minWidth: '12px', minHeight: '12px'}} />
  },
  {
    tag: 'misc',
    component: <VscSymbolMisc sx={{m: 'xs', minWidth: '12px', minHeight: '12px'}} />
  },
  {
    tag: 'home',
    component: <VscHome sx={{m: 'xs', minWidth: '12px', minHeight: '12px'}} />
  },
  {
    tag: 'money',
    component: <MdAttachMoney sx={{m: 'xs', minWidth: '12px', minHeight: '12px'}} />
  },
  {
    tag: 'programming',
    component: <VscCode sx={{m: 'xs', minWidth: '12px', minHeight: '12px'}} />
  },
  {
    tag: 'about',
    component: <VscAccount sx={{m: 'xs', minWidth: '12px', minHeight: '12px'}} />
  },
  {
    tag: 'tag',
    component: <VscTag sx={{m: 'xs', minWidth: '12px', minHeight: '12px'}} />
  },
  {
    tag: 'blog',
    component: <ImBlog sx={{m: 'xs', minWidth: '12px', minHeight: '12px'}} />
  }
]

export default function getIcon(name) {
  const tagIcon = tagIcons.find(x => x.tag === name)
  if (tagIcon) {
    return tagIcon.component
  }
  return tagIcons.find(x => x.tag === 'misc').component
}
