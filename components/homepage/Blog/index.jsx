import React from 'react'
import Container from '@/components/container'
import BlogCard from '../blogCard'

export default function Blog() {
  return (
    <div className="flex justify-center pt-20">
        <Container className="flex gap-5 flex-col">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Blog
            </h2>
            <p className="text-xl text-slate-600 text-center">
            Mulai dari artikel inspiratif hingga panduan praktis, temukan informasi terbaru seputar event dan tips-tips berguna untuk sukses di industri event.
            </p>
          </div>

          <div className="w-full flex gap-3">
            <BlogCard
              image="/homepage/event-services.png"
              title="Event"
              text="Kami membantu Anda merencanakan setiap detail event dari awal hingga akhir, memastikan semua kebutuhan terpenuhi dengan sempurna."
              href="/"
            />
            <BlogCard
              image="/homepage/event-organizer-services.png"
              title="Event Organizer"
              text="Dari logistik hingga koordinasi di hari-H, kami mengelola semua aspek agar event berjalan lancar dan sukses."
              href="/"
            />
            <BlogCard
              image="/homepage/sponsor-services.png"
              title="Sponsor"
              text="Kami menghubungkan Anda dengan sponsor yang tepat, membantu membangun kemitraan yang saling menguntungkan."
              href="/"
            />
          </div>
        </Container>
      </div>
  )
}
