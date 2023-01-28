/** @jsx jsx */
import { jsx } from "theme-ui"
import { FaLifeRing } from "@react-icons/all-files/fa/FaLifeRing"
import { AiFillCalculator } from "@react-icons/all-files/ai/AiFillCalculator"
import { AiFillDollarCircle } from "@react-icons/all-files/ai/AiFillDollarCircle"
import { VscSymbolMisc } from "@react-icons/all-files/vsc/VscSymbolMisc"

export default [
  {
    tag: 'life',
    component: <FaLifeRing sx={{m: 'xxs'}}/>
  },
  {
    tag: 'math',
    component: <AiFillCalculator sx={{m: 'xxs'}} />
  },
  {
    tag: 'finance',
    component: <AiFillDollarCircle sx={{m: 'xxs'}} />
  },
  {
    tag: 'misc',
    component: <VscSymbolMisc sx={{m: 'xxs'}} />
  }
]