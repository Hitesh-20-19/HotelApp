import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <Hero >
            <Banner title="404" subtitle="Page not found" >
                <Link to ="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
    )
}

export default Error
