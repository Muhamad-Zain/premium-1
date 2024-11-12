import style from './style.module.css'
import { LuAlarmClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchBg } from '../data/firebase';
import { AnimatedSection, AnimateSee } from '../animation';

export default function Page4({data, id}) {
    const [image, setImage] = useState('')
    useEffect(() => {
        const getImage = async () => {
            
            const url = await fetchBg(`${id}/location`)
            setImage(url)
        }
        getImage()

    },[])
    return(
        <section>
            <AnimatedSection>
            <div style={{backgroundImage: `url(${image})`}} className={style.bgAcara}> 
                <AnimateSee>
                <div className='relative z-10 py-5'>
                    <h3 className='playfair text-3xl sm:text-5xl'>AKAD NIKAH</h3>
                    <p className='uppercase'>{data?.date?.akad}</p>
                    <div className='text-xs py-3'>
                        <div className='flex items-center '>
                            <LuAlarmClock />
                            <p className='pl-2'>{data?.date?.time?.akad} - selesai</p>
                        </div>
                        <div className='flex items-center '>
                            <IoLocationOutline />
                            <p className='pl-2'>Rumah Mempelai Wanita</p>
                        </div>
                    </div>
                    <Link href={`${data?.location?.akad}`} className='py-2 w-32 flex justify-center items-center rounded-full bg-black bg-opacity-25 border border-white'>
                        <SiGooglemaps className='mr-2' />
                        location
                    </Link>
                </div>
                </AnimateSee>
                <div className='border-b-2 border-white w-10/12 sm:w-1/2 relative z-10' />
                <AnimateSee>
                <div className='relative z-10 py-5'>
                    <h3 className='playfair text-3xl sm:text-5xl'>RESEPSI</h3>
                    <p className='uppercase'>{data?.date?.resepsi}</p>
                    <div className='text-xs py-3'>
                        <div className='flex items-center '>
                            <LuAlarmClock />
                            <p className='pl-2'>{data?.date?.time?.resepsi} - selesai</p>
                        </div>
                        <div className='flex items-center '>
                            <IoLocationOutline />
                            <p className='pl-2'>Rumah Mempelai Pria</p>
                        </div>
                    </div>
                    <Link href={`${data?.location?.resepsi}`} className='py-2 w-32 flex justify-center items-center rounded-full bg-black bg-opacity-25 border border-white'>
                        <SiGooglemaps className='mr-2' />
                        location
                    </Link>
                </div>
                </AnimateSee>
            </div>
            </AnimatedSection>
        </section>
    )
}
Page4.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string
}