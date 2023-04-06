import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type Props = {

}

const Navbar = ({ }: Props) => {
  const [data, setData] = useState<Array<String>>([])
  const route = useRouter()
  console.log(route)

  const onSliceURL = (value: string) => {
    const res = value.split("/")
    if (res) {
      setData(res)
    }
  }

  useEffect(() => {
    if (route.pathname) {
      onSliceURL(route.pathname)
    }
  }, [route])

  return (
    <div className={`flex gap-1`}>
      {data && data.length ? data.map((item: any, key: any) => (
        <div key={key} className='hover:text-blue'>
          {item === '' ? (
            <Link href={'/'}>หน้าหลัก {">"}</Link>
          ) : (
            <div>
              <Link href={item} >{item}</Link>
              <div>
                {key + 1 < data.length && ">"}
              </div>
            </div>
          )}
        </div>
      )) : ""}
    </div>
  )
}

export default Navbar