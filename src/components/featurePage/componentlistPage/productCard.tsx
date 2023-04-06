import Image from 'next/image'
import React from 'react'

type Props = {
  data: any
}

const ProductCard = ({ data }: Props) => {
  return (
    <div>
      {data ? (
        <div className={`rounded-xl overflow-hidden shadow-xl cursor-pointer`}>
          <div className={`relative w-[300px] h-[300px]`}>
            <Image
              src={data.image}
              alt=''
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={`p-3 text-sm`}>
            <div className={`!text-lg font-bold`}>{data.name}</div>
            <div>
                <span className={`font-bold mr-1`}>NSN</span>
               {data.nsn}</div>
            <div>
              <span className='font-bold mr-1'>P/N</span>
              {data.pn}</div>
          </div>
        </div>
      ) : ""}
    </div>
  )
}

export default ProductCard