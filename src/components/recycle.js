import React from 'react'
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import {fadeIn} from 'react-animations'
import styled, {keyframes} from 'styled-components';

const Recycle = () => {

  const fadinAnimations = keyframes `${fadeIn}`

  const FadeInDiv = styled.div `
    animation: 0.5s ${fadinAnimations}
  `;

    return (
      <>

      <Tabs>
        <div className="hero">
          <div className="hero-body is-small">
            <div className="container">
              <div className="recycle-head">
                <div className="title is-spaced has-text-centered">
                  What Can Be Recycled
                </div>
                <div className="subtitle has-text-centered">
                  Through advances in recycling technology, you have more options than ever. And its a good thing because we need to conserve as much as resources as possible.
                </div>
              </div>
              <div className="columns">
                <div className="column">
                <Tab>
                  <div className="button is-medium is-centered" style={{textAlign:`center`, display:`flex`}}>
                    Metals
                  </div>
                </Tab>
                </div>
                <div className="column">
                <Tab>
                  <div className="button is-medium has-text-centered" style={{textAlign:`center`, display:`flex`}}>
                    Paper/Cardboard
                  </div>
                </Tab>
                </div>
                <div className="column">
                <Tab>
                  <div className="button is-medium  has-text-centered" style={{textAlign:`center`, display:`flex`}}>
                    Glass
                  </div>
                </Tab>
                </div>
                <div className="column">
                <Tab>
                  <div className="button is-medium has-text-centered" style={{textAlign:`center`, display:`flex`}}>
                    Plastics
                  </div>
                </Tab>
                </div>
                <div className="column">
                <Tab>
                  <div className="button is-medium  has-text-centered" style={{textAlign:`center`, display:`flex`}}>
                    Batteries/Bulbs
                  </div>
                </Tab>
                </div>
                <div className="column">
                <Tab>
                  <div className="button is-medium  has-text-centered" style={{textAlign:`center`, display:`flex`}}>
                    Electronics
                  </div>
                </Tab>
                </div>
              </div>
            </div>
          </div>
        </div>


            <div className="container">
              <Panel>
                <FadeInDiv >
                  <div className="subtitle is-6">
                    Do you think of your empty soda cans and food cans as a natural resource? They are. Indians currently discard about 2.7 million tons of aluminium each year.
                    Of that, about 30 percent is recycled. Apart from the economic impact, the environmental savings of recycling metal are enormous. Recycling stell and tin cans, for example, saves 74% of the energy used to produce them.
                  </div>
                  <hr style={{border:`1px solid grey`}}/>
                  <div className="tile is-vertical">
                    <div className="tile is-parent is-vertical">
                      <div className="title is-4">
                        ALUMINIUM CANS
                      </div>
                      <div className="subtitle is-6">
                        <p>
                          On Average Indians drink one beverage from an aluminium can every day. But we recycle just over 30% of the cans we use.
                        </p>
                        <p>
                          Since the cans are 100% recyclable. we could drastically reduce the energy needed to produce brand new cans simply by recycling our empties.
                          An Aluminium can is able to be returned to the shelf, as a new can, as quickly as 60 days after its put into your recycling container.
                        </p>
                        <p>
                          Recycling one aluminium can saves enought energy to run a television for three hours.
                        </p>
                      </div>
                    </div>
                    <div className="tile is-parent is-vertical">
                      <div className="title is-4">
                        Steel Cans And Tin Cans
                      </div>
                      <div className="subtitle is-6">
                        <p>
                          Most people call them "tin cans," but the containers your green beans come in are mostly made of stell.
                        </p>
                        <p>
                          The term 'tin' comes from the fact that cans have a micro-thin coating of tin inside. to protect the flavour and prevent the can from corroding.
                        </p>
                        <p>
                          How can you tell a steel or tin can from an aluminium one? See if a magenet attaches to it. Steel is magenetic, and aliminium is not.
                        </p>
                        <p>
                          About 71% of steel cans are recycled, making them one of the most recycled packaging products in India.
                        </p>
                        <p>
                          In addition, steel cans typically contan at least 25% recycled steel, but many are made from almost entirely of recycled steel.
                        </p>
                        <p>
                        Where does this recycled steel come from? Mainly from scrap metal.

Recycling steel saves at least 75% of the energy it would take to create steel from raw materials. That's enough energy to power 18 million homes.
                        </p>
                        <p>
                        During the recycling process, steel cans (in bales or loose) are fed into the furnaces of a steel mill or foundry. They may be mixed with new steel.

Some of the new "mini" steel mills manufacture their products from 100% recycled steel.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInDiv>
              </Panel>
              <Panel>
              <FadeInDiv style={{padding:`10px`}}>
                <div className="subtitle is-6">
                  Most of us use a paper product every day. That's because paper products make up about 71 million tons (or 29 percent) of the municipal waste stream, according to the Environmental Protection Agency (EPA). The good news is that more and more Indians are recycling paper. In fact, upwards of 63 percent (45 million tons) is recycled annually. Most of the papers is collected through our established network of raddiwalas.
                </div>
                <hr style={{border:`1px solid grey`}}/>
                <div className="tile is-vertical">
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                      CORRUGATED CARDBOARD
                    </div>
                    <div className="subtitle is-6">
                      <p>
                      Currently, about 50 percent of cardboard-boxes shipped commercially are recovered for recycling.
                      </p>
                      <p>
                        Many of the boxes are themselves made of recycled materials or lumber industry byproducts like sawdust and wood chips.
                      </p>
                      <p>
                        When recycled, cardboard is used to make chipboard like cereal boxes, paperboard, paper towels, tissues and printing or writing paper. It's also made into more corrugated cardboard.
                      </p>
                    </div>
                  </div>
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                      MAGAZINES
                    </div>
                    <div className="subtitle is-6">
                      <p>
                        Magazines are mage from paper that's been buffed and coated to achieve a glossy appearance. Next, the paper is covered with a white clay that make color photographs look more brilliant.
                        The shiny appearance does not contaminate the paper at all. About 45 percent of magazines are being recycled today
                      </p>
                      <p>
                        Recycled magazines are used to make newspaper, tissues, writing paper and paperboard
                      </p>
                      <p>
                        Recycling just one ton of paper saves enough energy to power the average Indian home for six months, so don't be afraid to recycle your old magazines. It's right thing to do.
                      </p>
                      <p>
                        About 71% of steel cans are recycled, making them one of the most recycled packaging products in India.
                      </p>
                    </div>
                  </div>
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                      OFFICE PAPER
                    </div>
                    <div className="subtitle is-6">
                      <p>
                        Just over 45% of office paper is recovered for recycling today
                      </p>
                      <p>
                        High-grade papers, such as white computer paper,bond, and letterhead, can be turned back into office paper if it's kept separate from other waste paper.
                        It can also be used to produce tissue paper,paperboard, stationary, magazines and other paper products.
                      </p>
                      <p>
                        Lower-grade papers, such as newsprint, colored paper, file stock and ground wood papers, are made into cardboard tissues, newspaper and toilet paper.
                      </p>
                    </div>
                  </div>
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                      Newspapers
                    </div>
                    <div className="subtitle is-6">
                      <p>
                        Just over 45% of office paper is recovered for recycling today
                      </p>
                      <p>
                        High-grade papers, such as white computer paper,bond, and letterhead, can be turned back into office paper if it's kept separate from other waste paper.
                        It can also be used to produce tissue paper,paperboard, stationary, magazines and other paper products.
                      </p>
                      <p>
                        Lower-grade papers, such as newsprint, colored paper, file stock and ground wood papers, are made into cardboard tissues, newspaper and toilet paper.
                      </p>
                    </div>
                  </div>
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                      Paperboard
                    </div>
                    <div className="subtitle is-6">
                      <p>
                        Just over 45% of office paper is recovered for recycling today
                      </p>
                      <p>
                        High-grade papers, such as white computer paper,bond, and letterhead, can be turned back into office paper if it's kept separate from other waste paper.
                        It can also be used to produce tissue paper,paperboard, stationary, magazines and other paper products.
                      </p>
                      <p>
                        Lower-grade papers, such as newsprint, colored paper, file stock and ground wood papers, are made into cardboard tissues, newspaper and toilet paper.
                      </p>
                    </div>
                  </div>
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                      Paper Cardboard Dairy and Juice Cartons
                    </div>
                    <div className="subtitle is-6">
                      <p>
                        Also called "globe-top-cartons", these are the non-plastic milk and juice cartons you see in the refrigerated section of the supermarket.
                      </p>
                      <p>
                        Known in the industry as "poly-coated paperboard containers", the cartons are made of about 80% high quality paper fiber, a renewable resource, and 20% polyethylene, a type of plastic that keeps the paper from getting wet.
                      </p>
                      <p>
                        Indians Consumes enormouse quantities of milk and juice, requiring tremondous outlays of energy to produce, ship and landfill the cartons. Only a fraction of these are recycled.
                      </p>
                    </div>
                  </div>
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                      Unsolictied Direct Mail
                    </div>
                    <div className="subtitle is-6">
                      <p>
                        You may think of it as "junk mail" or you may welcome the flyers, catalogs, and coupons that appear in your mailbox.
                        Either way, it's important to recycle them.
                      </p>
                      <p>
                        "Mixed Paper" is the term used to define the many kinds of paper products that can be collected and recycled from our daily mail.
                      </p>
                    </div>
                  </div>
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                    Phone Books
                    </div>
                    <div className="subtitle is-6">
                      <p>
                        Every year, new phone books and business directories arrive at your door. Are you careful to recycle your old ones?
                      </p>
                      <p>
                        The pages in a phone book are 100% recyclable and are often used to make new phone books
                      </p>
                      <p>
                        There are enough phone books created each year to measure 106,700 miles when lined up end to end. This means they would circle around the earth about 4.28 times!
                      </p>
                      <p>
                        By recycling just 500 books, we could save between 17 and 31 trees, 7,000 gallons of water, 463 gallons of oil, 587 pounds of air pollution, 3.06 cubic yards of landfill space and 4,077 kilowatt hours of energy according to the American Forest & Paper Association.
                      </p>
                    </div>
                  </div>
                </div>
                </FadeInDiv>
              </Panel>
              <Panel>
                <FadeInDiv style={{padding:`10px`}}>
                  <div className="subtitle is-6">
                    Most glass bottles and jars produced in the india now contain at least 27% recycled glass - which also saves on energy to produce glass made from new materials.
                  </div>
                  <hr style={{border:`1px solid grey`}}/>
                  <div className="tile is-vertical">
                    <div className="tile is-parent is-vertical">
                      <div className="title is-4">
                        CLEAR(FLINT) GLASS
                      </div>
                      <div className="subtitle is-6">
                        <p>
                          About 61% of glass containers produced in this country are clear.
                        </p>
                        <p>
                          Clear glass is made of a combination of silica(sand), soda ash, and limestone.
                        </p>
                        <p>
                          Clear glass may cause some products to degrade because of light exposure. That's why about 39% of the glass produced is colored.
                        </p>
                      </div>
                    </div>
                    <div className="tile is-parent is-vertical">
                      <div className="title is-4">
                        Brown (Amber) Glass
                      </div>
                      <div className="subtitle is-6">
                        <p>
                          Most people call them "tin cans," but the containers your green beans come in are mostly made of stell.
                        </p>
                        <p>
                          About 31% of glass containers producted in this country are brown in color
                        </p>
                        <p>
                          To produce brown glass, the manufacturer adds nickel, sulfer and carbon to molten glass.
                        </p>
                        <p>
                          The "brown" in the glass cannot be removed. This, brown bottles can be used to make other brown bottles.
                        </p>
                        <p>
                          Brown glass protects the container's contents from direct sunlight thus preserving freshness and flavour
                        </p>
                      </div>
                    </div>
                    <div className="tile is-parent is-vertical">
                      <div className="title is-4">
                        Green (Emberald) Glass
                      </div>
                      <div className="subtitle is-6">
                        <p>
                          About 7% of glass containers produced in this country are green in colour.
                        </p>
                        <p>
                          To produce green glass, the manufacturer adds iron, chromium or copper to molten glass
                        </p>
                        <p>
                        Green glass comes in a variety of shades. The "green" cannot be removed. Thus, green bottles can be used only to make other green bottles.

Green glass helps keep sunlight and temperature from affecting the contents, which explains why it is often used in the manufacture of wine bottles.
                        </p>
                        <p>
                          The "brown" in the glass cannot be removed. This, brown bottles can be used to make other brown bottles.
                        </p>
                        <p>
                          Brown glass protects the container's contents from direct sunlight thus preserving freshness and flavour
                        </p>
                      </div>
                    </div>
                  </div>
                  </FadeInDiv>
              </Panel>
              <Panel>
              <FadeInDiv style={{padding:`10px`}}>
                <div className="subtitle is-6">
                  Did you know that every year we produce enough plastic film in this country to shrink-wrap Texas? Or that although Americans recycle more than 2.4 billion pounds of plastic each year, it only makes up around 27 percent of the waste stream? While plastic offers the advantages of being flexible and lightweight, it also consumes fossil resources for its manufacture and contributes waste in our environment.
                </div>
                <hr style={{border:`1px solid grey`}}/>
                <div className="tile is-vertical">
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                      Make Sure It's Clean
                    </div>
                    <div className="subtitle is-6">
                      <p>
                        Does that plastic lunch container still have yesterday's food it it? Don't recycle it until it's clean!
                      </p>
                      <p>
                        One dirty product, or one with food waste still in it, can contaiminate an entire bale, containing thousands of pounds of collected plastics.
                      </p>
                      <p>
                        This can cause thousands of recyclable items to go to a landfill instead of being recycled.
                      </p>
                      <p>
                        Cleanliness is essential
                      </p>
                    </div>
                  </div>

                </div>
                </FadeInDiv>
              </Panel>
              <Panel>
              <FadeInDiv style={{padding:`10px`}}>
                <div className="subtitle is-6">
                  Unwanted batteries and bulbs should never be mixed with other recyclables, but many are easy to recycle through other options.  Check below for information on discarding car batteries, household and button batteries, incandescent light bulbs, and new CFLs (compact fluorescent lights). In the United States, a CFL can save over $30 in electricity costs over the lamp's lifetime compared to an incandescent lamp. However, CFLs contain mercury, which can be harmful to humans and the environment if not disposed of properly
                </div>
                <hr style={{border:`1px solid grey`}}/>
                <div className="tile is-vertical">
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                    </div>
                    <div className="subtitle is-6">
                      <p>

                      </p>

                    </div>
                  </div>

                </div>
                </FadeInDiv>
              </Panel>
              <Panel>
              <FadeInDiv style={{padding:`10px`}}>
                <div className="subtitle is-6">
                  Unwanted electronics can't be mixed with other recyclables, but are easy to recyclable through other options. There are many chemicals and mineral elements in e-waste. A circuit board contains copper, gold, silver, platinum and palladium, as well as lead. If recycled properly, this waste is a valuable source of secondary raw materials.
                </div>
                <hr style={{border:`1px solid grey`}}/>
                <div className="tile is-vertical">
                  <div className="tile is-parent is-vertical">
                    <div className="title is-4">
                    </div>
                    <div className="subtitle is-6">
                      <p>

                      </p>

                    </div>
                  </div>

                </div>
                </FadeInDiv>
              </Panel>
            </div>

      </Tabs>

      </>
    )
  }

export default Recycle
