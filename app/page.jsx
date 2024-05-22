import Jumbotron from '@/components/homepage/jumbotron';
import About from '@/components/homepage/about';
import Services from '@/components/homepage/services';
import HowTo from '@/components/homepage/howto';
import Container from '@/components/container';
import TestimoniCard from '@/components/homepage/testimoniCard';
import Testimoni from '@/components/homepage/testimoni';
import Blog from '@/components/homepage/Blog';

export default function Home() {
  return (
    <>
      <Jumbotron />
      <About />
      <Services />
      <HowTo />
      <Testimoni />
      <Blog />
    </>
  );
}
