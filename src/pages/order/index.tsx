import OrderItem from '@/components/featurePage/order/orderItem'
import React from 'react'

export const mockDataOrderList = [
  {
    id: 1,
    name: "Gavan",
    nsn: "5457079325",
    pn: "26-177-4420",
    qty: 8
  },
  {
    id: 2,
    name: "Sargent",
    nsn: "1135590141",
    pn: "21-054-7952",
    qty: 6
  },
  {
    id: 3,
    name: "Dulcinea",
    nsn: "6685179198",
    pn: "16-924-3883",
    qty: 3
  },
  {
    id: 4,
    name: "Christalle",
    nsn: "6176216508",
    pn: "63-240-6165",
    qty: 1
  },
  {
    id: 5,
    name: "Dosi",
    nsn: "2877754065",
    pn: "80-633-6633",
    qty: 2
  },
  {
    id: 6,
    name: "Gaylord",
    nsn: "2511662477",
    pn: "95-100-2059",
    qty: 3
  },
  {
    id: 7,
    name: "Rosella",
    nsn: "9924915836",
    pn: "56-452-2269",
    qty: 6
  },
  {
    id: 8,
    name: "Rolph",
    nsn: "4398847324",
    pn: "10-785-3272",
    qty: 4
  },
  {
    id: 9,
    name: "Roslyn",
    nsn: "4538676020",
    pn: "44-085-7123",
    qty: 9
  },
  {
    id: 10,
    name: "Crista",
    nsn: "2679352793",
    pn: "92-027-4198",
    qty: 2
  }
]
type Props = {}

const OrderPage = (props: Props) => {
  return (
    <div className='p-6'>
      <div className={`grid grid-cols-6 gap-6`}>
        <div className={`col-span-5`}>
          <div className='bg-white rounded-lg p-3'>
            {mockDataOrderList.map((item: any, key) => (
              <div key={key}>
                <OrderItem data={item} />
              </div>
            ))}
          </div>
        </div>
        <div className={`col-span-1`}>
          <div className={`bg-white p-3 rounded-lg flex flex-col gap-3`}>
            <div className='text-2xl font-bold'>รายการ</div>
            <div className={`flex justify-between`}>
              <div>จำนวนรายการ</div>
              <div>9 EA</div>
            </div>
            <div className='text-center'>
              <button className={`bg-orange text-white p-2 px-3 rounded-xl`}>พิมพ์ใบเบิกพัสดุ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage