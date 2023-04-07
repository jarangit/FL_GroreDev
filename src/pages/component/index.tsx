import OrderItem from '@/components/featurePage/order/orderItem'
import Image from 'next/image'
import React from 'react'
import { mockDataOrderList } from '../order'

type Props = {}

const ComponentPage = (props: Props) => {
  return (
    <div className='p-6'>
      <div className='w-full bg-white rounded-xl p-6'>
        <div className='grid grid-cols-5 gap-6'>
          <div className='col-span-2'>
            <div className=' w-[500px] h-[500px] rounded-xl overflow-hidden relative'>
              <Image
                src="/assets/product2.jpg"
                alt=''
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className='col-span-3'>
            <div className='flex flex-col gap-3 text-xl'>
              <div className='text-3xl'>External Fuel Tank 275 gal</div>
              <div className='flex gap-3 items-center'>
                <div>NSN:</div>
                <div>0242151477</div>
              </div>
              <div className='flex gap-3 items-center'>
                <div>P/N:</div>
                <div>97-989-9245</div>
              </div>
              <div className='flex gap-3 items-center'>
                <div>หน่วยนับ:</div>
                <div>EA</div>
              </div>
              <div className='flex gap-3 items-center'>
                <div>AEM:</div>
                <div>AEM-97-989-9245</div>
              </div>
              <div className='flex gap-3 items-center'>
                <div>คู่มือปฏิยบัติ:</div>
                <div>T.O.6J14-2-36-4</div>
              </div>
            </div>
          </div>
          <div className='col-span-5 py-10'>
            <div className='text-xl'>ชิ้นงานนี้เป็นส่วนหนึ่งของ u.F-5E/F ทำหน้าที่เป็นถังเชื้อเพลิง</div>
          </div>
        </div>
      </div>

      {/* list */}
      <div className='w-full bg-white rounded-xl p-6 mt-10'>
        <div className='bg-white rounded-lg p-3'>
          {mockDataOrderList.map((item: any, key) => (
            <div key={key}>
              <OrderItem data={item} mode = {"view"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ComponentPage