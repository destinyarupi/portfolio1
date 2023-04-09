import { Container } from '../assets/data/Exports'
import Button from 'react-bootstrap/esm/Button'

export const CTA = () => {
  return (
    <section id='callToAction'>
        <Container className='my-5 py-5 text-center'>
            <div style={{background: 'linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)'}}
                 className='py-5 mb-5 rounded-4'
            >
                <h1 className='mb-4 fw-bolder lh-base px-2 ctaH1'>
                    Get ready to collect <br /> our NFT
                </h1>
                <Button className='ctaBtn fs-6 fs-md-5'>Get Started</Button>
            </div>
        </Container>
    </section>
  )
}
