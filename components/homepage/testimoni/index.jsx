import Container from '@/components/container'
import React from 'react'
import TestimoniCard from '../testimoniCard'

export default function Testimoni() {
  return (
    <div className="flex justify-center pt-20">
        <Container className="flex gap-5 flex-col">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">Testimoni</h2>
            <p className="text-sm md:text-lg max-w-[800px] text-slate-600 text-center mt-2.5">
              Mulai dari pengalaman pengguna hingga kesuksesan event yang telah
              kami bantu, inilah testimonial dari mereka yang telah bekerja sama
              dengan Event Aja.
            </p>
          </div>

          <div className="w-full flex gap-3 flex-wrap md:flex-nowrap mt-8">
            <TestimoniCard
              image="/homepage/testi-1.png"
              rate={5}
              text="Event Aja telah mengubah cara saya mengelola event. Dengan fitur-fitur yang intuitif dan dukungan yang luar biasa dari timnya, saya dapat fokus pada kreativitas dan membuat event yang berkesan bagi peserta. Sangat merekomendasikan!."
              name="Jhon Doe, Event Organizer"
            />
            <TestimoniCard
              image="/homepage/testi-2.png"
              rate={5}
              text="Event Aja telah mengubah cara saya mengelola event. Dengan fitur-fitur yang intuitif dan dukungan yang luar biasa dari timnya, saya dapat fokus pada kreativitas dan membuat event yang berkesan bagi peserta. Sangat merekomendasikan!."
              name="Jhon Doe, Event Organizer"
            />
            <TestimoniCard
              image="/homepage/testi-3.png"
              rate={5}
              text="Event Aja telah mengubah cara saya mengelola event. Dengan fitur-fitur yang intuitif dan dukungan yang luar biasa dari timnya, saya dapat fokus pada kreativitas dan membuat event yang berkesan bagi peserta. Sangat merekomendasikan!."
              name="Jhon Doe, Event Organizer"
            />
          </div>
        </Container>
      </div>
  )
}
