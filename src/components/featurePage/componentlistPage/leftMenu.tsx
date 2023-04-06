import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menulist from './menulist';

type Props = {}

const mockMenu = [
  {
    header: "P&D Valve",
    child: [
      {
        label: "Retainer",
        link: ""
      },
      {
        label: "Steeve",
        link: ""
      },
      {
        label: "Piston",
        link: ""
      },
      {
        label: "Spring",
        link: ""
      },
    ]
  },
  {
    header: "P&D Valve",
    child: [
      {
        label: "Retainer",
        link: ""
      },
      {
        label: "Steeve",
        link: ""
      },
      {
        label: "Piston",
        link: ""
      },
      {
        label: "Spring",
        link: ""
      },
    ]
  },
  {
    header: "P&D Valve",
    child: [
      {
        label: "Retainer",
        link: ""
      },
      {
        label: "Steeve",
        link: ""
      },
      {
        label: "Piston",
        link: ""
      },
      {
        label: "Spring",
        link: ""
      },
    ]
  },

]
const LeftMenu = (props: Props) => {
  return (
    <div>
      {mockMenu && mockMenu.length && mockMenu.map((item: any, key: any) => (
        <div key={key}>
          <Menulist data={item} />
        </div>
      ))}
    </div>
  )
}

export default LeftMenu