import React from 'react'; // Import React
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

const BlogMainPage = () => {
    return (
        <>
        <div className='blog-main-bg-container'>
            {/* <div className='main-cards-div'>
            <div className='blog-main-page-div'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691511447/social-media-networking-online-communication-connect-concept_vds8gq.jpg" className="card-img-top" alt="blog-boot-cards" />
                    <div className="card-body">
                        <h5 className="card-title">Cultivating Gratitude</h5>
                        <p className="card-text">Unlock the transformative power of gratitude. Delve into practices that enrich your daily life, enhance well-being, and cultivate a positive outlook through the art of cultivating gratitude.</p>
                        <a href="#" className="btn btn-primary">See Here</a>
                    </div>
                </div>
            </div>
            <div className='blog-main-page-div'>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691511407/documents-paperwork-business-strategy-concept_1_ak1mbu.jpg" className="card-img-top" alt="blog-boot-cards" />
                <div className="card-body">
                    <h5 className="card-title">Building Resilience</h5>
                    <p className="card-text">Discover the tools and mindset to bounce back stronger from life's challenges. Explore strategies for building resilience and thriving amidst adversity in this empowering blog.</p>
                    <a href="#" className="btn btn-primary">Explore</a>
                </div>
            </div>
        </div>
        </div> */}
        <div className='button-main-getStarted-div'>
        <Link to="/login"><button class="btn btn-warning">Get Started</button></Link>
        </div>
        </div>
    
    </>
    )
}

export default BlogMainPage;
