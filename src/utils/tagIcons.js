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

const tagIcons = [
  {
    tag: 'life',
    component: <FaLifeRing sx={{m: 'xs'}}/>
  },
  {
    tag: 'math',
    component: <AiFillCalculator sx={{m: 'xs'}} />
  },
  {
    tag: 'finance',
    component: <AiFillDollarCircle sx={{m: 'xs'}} />
  },
  {
    tag: 'misc',
    component: <VscSymbolMisc sx={{m: 'xs'}} />
  },
  {
    tag: 'home',
    component: <VscHome sx={{m: 'xs'}} />
  },
  {
    tag: 'money',
    component: <MdAttachMoney sx={{m: 'xs'}} />
  },
  {
    tag: 'programming',
    component: <VscCode sx={{m: 'xs'}} />
  },
  {
    tag: 'about',
    component: <VscAccount sx={{m: 'xs'}} />
  }
]

export default function getIcon(name) {
  console.log(name)
  return tagIcons.find(x => x.tag === name).component || tagIcons.find(x => x.tag === 'misc').component
}
