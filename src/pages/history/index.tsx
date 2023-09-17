import CardHistory from '@/components/atoms/CardHistory'
import ImageHistory from '@/components/atoms/ImageHistory'
import ImageOverlay from '@/components/atoms/ImageOverlay'
import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import React from 'react'

type Props = {}

const History = ({ repo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log({ repo });
  return (
    <div className='bg-white'>
      <Head><title>History</title></Head>
      <Navbar />
      <ImageHistory imageUrl={"/images/cart.png"}>
        <div className="grid overflow-scroll grid-cols-3 p-4 md:grid-cols-4 gap-4 mt-4 md:mt-16">
          {
            repo.map((item, index)=>(
              <CardHistory item={item} key={index}/>
            ))
          }
        </div>
      </ImageHistory>
      <Footer />
    </div>
  )
}

export default History

export const getServerSideProps: GetServerSideProps<{
  repo: any[]
}> = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_APP_HOST}/api/transaction`)
  return { props: { repo: data.data } }
}