import Image from 'next/image'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
type Props = {}

const ProfilePage = (props: Props) => {
  return (
    <div className='p-6'>
      <div className='bg-white rounded-lg p-6'>
        <div className='grid grid-cols-6 gap-6'>
          <div className='col-span-2'>
            <div className='flex flex-col gap-3 justify-center items-center'>
              <div>
                <Image
                  src={"/assets/avatar.jpg"}
                  alt=''
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='min-h-[310px] flex flex-col gap-3'>
              <div className='flex gap-3 text-xl items-center'>
                <div className='text-background'>
                  <PersonIcon fontSize={"large"} />
                </div>
                <div>จ.ท อากาศ ยิ่งยืน</div>
              </div>
              <div className='flex gap-3 text-lg items-center'>
                <div>ตำแหน่ง:</div>
                <div>เจ้าหน้าที่พัสดุ กองซ่อมบริภัณท์ ซอ.ทอ.</div>
              </div>
              <div className='flex gap-3 text-lg items-center'>
                <div>สังกัด:</div>
                <div>กรมช่างอากาศ</div>
              </div>
              <div className='flex gap-3 text-lg items-center'>
                <div>สิทธิการเข้าถึง:</div>
                <div>ผู้ดูแลระบบ</div>
              </div>
            </div>

          </div>
          <div className='col-span-2 text-center'>
            <button className={`bg-yellow text-blue p-2 px-3 rounded-xl font-bold text-xl`}>แก้ไขโปรไฟล์</button>
          </div>
          <div className='col-span-4'>
            <button className={`bg-yellow text-blue p-2 px-3 rounded-xl font-bold text-xl`}>แก้ไขโปรไฟล์</button>
          </div>
          <div className='col-span-5'>
            <textarea className='border rounded-xl w-full p-3' placeholder='รายละอียด' rows={10} />
          </div>
          <div className='col-span-1'>
            <div className='w-full h-full flex justify-center items-end pb-3'>
              <button className={`bg-orange text-white p-2 px-6 rounded-xl font-bold text-xl`}>ออกจากระบบ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage