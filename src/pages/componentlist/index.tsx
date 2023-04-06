import LeftMenu from '@/components/featurePage/componentlistPage/leftMenu'
import ProductCard from '@/components/featurePage/componentlistPage/productCard'
import Navbar from '@/components/share/navbar'
import { useRouter } from 'next/router'
import React from 'react'

const mockDataProduct = [
  {
    id: 1,
    name: "Merle",
    nsn: "0878402365",
    pn: "66-546-8260",
    image: "/assets/product2.jpg"
  },
  {
    id: 2,
    name: "Aida",
    nsn: "0242151477",
    pn: "97-989-9245",
    image: "/assets/product.jpg"
  },
  {
    id: 3,
    name: "Bertrand",
    nsn: "2633808840",
    pn: "96-628-6231",
    image: "/assets/product2.jpg"
  },
  {
    id: 4,
    name: "Lucho",
    nsn: "4335832060",
    pn: "02-179-4733",
    image: "/assets/product2.jpg"
  },
  {
    id: 5,
    name: "Aime",
    nsn: "8396045585",
    pn: "90-633-3579",
    image: "/assets/product.jpg"
  },
  {
    id: 6,
    name: "Timmy",
    nsn: "1926667352",
    pn: "26-543-0960",
    image: "/assets/product.jpg"
  },
  {
    id: 7,
    name: "Kariotta",
    nsn: "6314873312",
    pn: "22-225-4617",
    image: "/assets/product3.jpg"
  },
  {
    id: 8,
    name: "Cybil",
    nsn: "3972547412",
    pn: "17-965-9301",
    image: "/assets/product2.jpg"
  },
  {
    id: 9,
    name: "Opaline",
    nsn: "0863131956",
    pn: "84-592-7248",
    image: "/assets/product3.jpg"
  },
  {
    id: 10,
    name: "Xena",
    nsn: "9612465363",
    pn: "12-255-7431",
    image: "/assets/product.jpg"
  },
  {
    id: 11,
    name: "Gian",
    nsn: "6619663400",
    pn: "00-742-0175",
    image: "/assets/product2.jpg"
  },
  {
    id: 12,
    name: "Carree",
    nsn: "3755954273",
    pn: "71-978-7939",
    image: "/assets/product.jpg"
  },
  {
    id: 13,
    name: "Archy",
    nsn: "8733026378",
    pn: "13-775-8204",
    image: "/assets/product3.jpg"
  },
  {
    id: 14,
    name: "Smith",
    nsn: "7727826286",
    pn: "88-088-0632",
    image: "/assets/product.jpg"
  },
  {
    id: 15,
    name: "Farley",
    nsn: "4056445613",
    pn: "72-633-9030",
    image: "/assets/product3.jpg"
  },
  {
    id: 13,
    name: "Archy",
    nsn: "8733026378",
    pn: "13-775-8204",
    image: "/assets/product3.jpg"
  },
  {
    id: 14,
    name: "Smith",
    nsn: "7727826286",
    pn: "88-088-0632",
    image: "/assets/product.jpg"
  },
  {
    id: 15,
    name: "Farley",
    nsn: "4056445613",
    pn: "72-633-9030",
    image: "/assets/product3.jpg"
  },
]
type Props = {}

const ComponentListPage = (props: Props) => {


  return (
    <div>
      <div className='grid grid-cols-6'>
        <div className='col-start-2 col-span-5 py-3 px-6'>
          <Navbar />
        </div>
        <div className='col-span-1'>
          <LeftMenu />
        </div>
        <div className={`col-span-5`}>
          <div className={`grid md:grid-cols-3 lg:grid-cols-5 gap-6 px-6`}>
            {mockDataProduct && mockDataProduct.length && mockDataProduct.map((item: any, key: any) => (
              <div key={key}>
                <ProductCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentListPage