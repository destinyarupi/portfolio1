import Stack from 'react-bootstrap/Stack';
import { sponsorLogos } from '../assets/data/Data'

export const Sponsors = () => {
    const renderLogos = sponsorLogos.map(logo => (
        <div key={logo.id}>
            <img
                src={logo.src}
                alt="logo"
                className='img-fluid'
            />
        </div>
    ))

    return (
        <section id="sponsors">
            <Stack direction='horizontal' gap={4} className='container justify-content-between align-items-center py-5 my-2'>
                {renderLogos}
            </Stack>
        </section>
    )
}
