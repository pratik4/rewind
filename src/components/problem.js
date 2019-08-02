import React from 'react'
import bg from './banner.png'
import './style.css'
import money from './crushed.jpg'
import env from './g153.png'
import trashed from './TRASHED2.mp4'
import trashBeach from './beach.jpg'

const problembg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: `center`,
    backgroundSize:`cover`,
    position:`relative`,
}

function ProblemAltTiles() {
  return (
  <section>
      <div className="container is-fluid">
          <div class="tile">
              <div class="tile is-parent has-background-grey-lighter altStyleTop">
                  <div class="tile is-child reduce-content">
                      <div class="title is-4 is-spaced has-text-centered">Earn An Extra Income</div>
                          <div class="subtitle is-6 has-text-centered">
                            One of the major benefits of recycling is financial income. We would all find several items lying around at our home that could be recycled and make money from them.
Some such items are old furniture, old phones, old cables, containers, old clothes, electrical appliances and more.
Rewind helps you dispose off these such items sustainably while making money.

                          </div>
                  </div>
              </div>
              <div class="tile is-parent">
                  <div class="tile is-child ">
                  <figure class="image" >
                      <img style={{height:`400px`}} src={money} />
                  </figure>
                  </div>
              </div>
          </div>
          <div class="tile" >
              <div class="tile is-parent">
                  <div class="tile is-child">
                  <figure class="image">
                      <img style={{height:`400px`}} src={env} />
                  </figure>
                  </div>
              </div>
              <div class="tile is-parent has-background-grey-lighter altStyleBottom">
                  <div class="tile is-child reduce-content">
                      <div class="title is-4 is-spaced has-text-centered">Conserves Resources and Saves Environment</div>
                    <div class="subtitle is-6 has-text-centered">
                            Throwing away things in the dumpster could force manufacturers to mine more for new raw material. Recycling aluminium cans, steel, copper and other expensive metals can save costly mining expenses as well as consume resources.
Recycling can significantly reduce the emission of greenhouse gasses from landfills and saves Environment from getting  more polluted.
                          </div>
                      </div>
                  </div>

              </div>
          </div>
  </section>
)
}

function ProblemAction() {
    return (
    <section>
        <div className="hero is-dark is-medium">
            <div className="hero-body">
                <div className="container">
                    <div className="title is-spaced is-2 has-text-centered">
                        Let's Embrace The Value Of Waste
                    </div>
                    <div className="has-text-centered">
                        <a href="/" className="button is-medium is-rounded ">
                          Book a Request
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

function ProblemBanner() {
    return (
        <section>

                <div className="videoContent">
                  <video poster={trashBeach} autoplay muted loop id="myVideo">
                      <source src={trashed} type="video/mp4" />
                      Your browser does not support HTML5 video.
                  </video>
                  <div className="video-text">
                      <div className="title is-spaced is-2 has-text-centered">
                         We Buy It. We Use It. We Throw It Away.
                      </div>
                      <div className="subtitle is-4 has-text-centered" >
                         We refuse to understand the consequence of trash ending up in landfills and effecting our environment. The very trash which can be reused and recycled.
                      </div>
                </div>
              </div>


        </section>
    )
}

export default function Problem() {
    return (
        <>
            <ProblemBanner />
            <section>
              <div className="hero">
                  <div className="hero-body">
                    <div className="container">
                      <div className="title has-text-centered is-spaced">
                          RECYCLE AND REUSE
                      </div>
                      <div className='subtitle has-text-centered'>
                        Recycle is one of the effective ways to solve the trash Problem.
                        <div className='has-text-centered'>
                          Recycling benefits us in many ways.
                        </div>
                      </div>

                    </div>
                  </div>
              </div>
            </section>
            <ProblemAltTiles />
            <ProblemAction />
        </>
    )
}
