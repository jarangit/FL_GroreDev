import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {
  data: any
}

const Menulist = ({ data }: Props) => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <div className={`flex items-center bg-blue text-white justify-between py-1 px-3`}>
        <div>{data.header}</div>
        <div onClick={() => setOpen(!open)} className={`cursor-pointer`}>
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className={`w-full text-center   overflow-hidden transition-all ${open ? `max-h-[1000] py-2` : `max-h-0`} `}>
        {data.child.map((itemChild: any, key: any) => (
          <div key={key}>
            <div>{itemChild.label}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Menulist