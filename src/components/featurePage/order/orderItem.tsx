import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
type Props = {
  data: any;
  mode?: string;
}

const OrderItem = ({ data, mode }: Props) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (data) {
      setCount(data.qty)
    }
  }, [data])

  return (
    <div className='flex justify-between items-center py-3 border-b border-background'>
      <div className='flex gap-3 items-center'>
        <div className='relative w-16 h-16 rounded-md overflow-hidden'>
          <Image
            src={"/assets/product2.jpg"}
            alt=''
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className='text-xs'>
          <div className='text-lg font-bold'>{data.name}</div>
          <div>
            <span className='font-bold mr-1'>NSN</span>
            {data.nsn}
          </div>
          <div>
            <span className='font-bold mr-1'>P/N</span>
            {data.pn}
          </div>
        </div>
      </div>
      <div className='flex gap-3 items-center'>
        <div className='flex gap-1 items-center'>
          <div className='text-background cursor-pointer' onClick={() => count > 0 && setCount(count - 1)}>
            <IndeterminateCheckBoxRoundedIcon />
          </div>
          <div>{count}</div>
          <div className='text-background cursor-pointer' onClick={() => setCount(count + 1)}>
            <AddBoxRoundedIcon />
          </div>
        </div>
        <div>EA</div>
        {mode !== "view" ? (
          <div className={`text-[#f45353]`}>
            <DeleteRoundedIcon />
          </div>
        ) : ""}
      </div>
    </div>
  )
}

export default OrderItem