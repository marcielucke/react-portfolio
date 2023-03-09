import React from 'react'
import './portfolio.css'


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>
                My Portfolio

            </h5>
            <h2>
                Recent Work
            </h2>

            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={require('../../assets/mylocalmusic.png')} alt="1"></img>
                    </div>
                    <h3> My Local Music</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/jsadowski7/MyLocalMusic" target="blank" className='btn'> Github</a>
                    </div>
                   

                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img src={require('../../assets/jobsight.png')} alt="2"></img>
                    </div>
                    <h3> Job Sight</h3>
                    <div className="portfolio_item-cta">
                    <a href="http://github.com/https://github.com/Nevin-Lewis/job_searcher " target="blank" className='btn'> Github</a>
                    </div>
                   

                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img src={require('../../assets/regex.png')} alt="3"></img>
                    </div>
                    <h3> Regex Email Blog</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/marcielucke/regex-tutorial" target="blank" className='btn'> Github</a>
                    </div>
                   

                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img src={require('../../assets/ecommerce.png')} alt="4"></img>
                    </div>
                    <h3> Ecommerce Backend Database</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/marcielucke/ecommerce-backend" target="blank" className='btn'> Github</a>
                    </div>
                   

                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img src={require('../../assets/note taker.png')} alt="5"></img>
                    </div>
                    <h3> Note Taker App</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/marcielucke/note-taker" target="blank" className='btn'> Github</a>
                    </div>
                   

                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                    <img src={require('../../assets/munchr.png')} alt="6"></img>
                    </div>
                    <h3> Munchr: Food and Drink Recipes</h3>
                    <div className="portfolio_item-cta">
                    <a href="https://github.com/RyStreet/Munchr" target="blank" className='btn'> Github</a>
                    </div>
                   

                </article>

            </div>


        </section>
    )
}

export default Portfolio