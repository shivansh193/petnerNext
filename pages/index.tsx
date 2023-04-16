import Navbar from '../components/navbar'
import PageCarousel from '../components/Homepage'

export default function Home() {
  return (
    <div>
      <Navbar />
      <PageCarousel
       backgroundImage="https://example.com/image.jpg"
       title="Welcome to petner"
       description="We help you get you your right Pet-Partner, without even having the stress which comes with having a pet, SOUNDS TOO GOOD TO BE TRUE? TRY IT OUT YOURSELF"
       buttonText="Click Me"
      />
    </div>
    

  )
}
