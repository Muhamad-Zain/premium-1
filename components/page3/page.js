import PropTypes from 'prop-types'
import style from './style.module.css'
import { useEffect, useState } from 'react'
import { fetchBg } from '../data/firebase'
import { AnimatedSection, AnimateSee } from '../animation'

export default function Page3({data, id}) {

    const [groom, setGroom] = useState('')
    const [bride, setBride] = useState('')

    useEffect(()=> {
        const getImage = async () => {
            const urlGroom = await fetchBg(`${id}/groom`)
            const urlBride = await fetchBg(`${id}/bride`)
            setGroom(urlGroom)
            setBride(urlBride)
        }
        getImage()
    },[])
    return(
        <section className='py-10 px-2 sm:px-20'>
            <AnimatedSection>
            <div className=' flex  items-center '>
                <div style={{backgroundImage:`url(${groom})`}} className={style.bgCardMen}>
                </div>
                <div className={style.chil}>
                    <h3>THE GROOM</h3>
                </div>
            </div>
            </AnimatedSection>
            <AnimateSee>
            <div className='relative z-10  p-5'>
                <h3 className='text-2xl playfair italic font-bold' style={{textShadow: '2px 2px black'}}>{data?.name?.namaLengkap?.mens}</h3>
                <p className='italic'  dangerouslySetInnerHTML={{ __html: data?.parent?.mens }}></p>
            </div>
            </AnimateSee>
            <div className='flex justify-center items-center py-5 text-5xl playfair'>
                <div className='border-b-2 border-white w-10 pr-2' />&<div className='border-b-2 border-white w-10 pl-2' />
            </div>
            <AnimatedSection>
            <div className=' flex  items-center justify-end'>
                <div className={style.chil}>
                    <h3>THE BRIDE</h3>
                </div>
                <div style={{backgroundImage:`url(${bride})`}} className={style.bgCardGrils}>
                </div>
            </div>
            </AnimatedSection>
            <AnimateSee>
            <div className='relative z-10 text-end p-5'>
                <h3 className='text-2xl playfair italic font-bold'  style={{textShadow: '2px 2px black'}}>{data?.name?.namaLengkap?.grils}</h3>
                <p className='italic'  dangerouslySetInnerHTML={{ __html: data?.parent?.grils }}
                ></p>
            </div>
            </AnimateSee>
        </section>
    )
}
Page3.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string
}