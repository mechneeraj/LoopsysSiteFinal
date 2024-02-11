import React from "react";
import Content from "./Content";
import Customers from "./Customers";
import Portfolio from './Portfolio';
import Team from './Team';

export default function Home()
{
    return(
<>
{/* <HeroImage/> */}
<Content/>
<Portfolio/>
<Customers/>
<Team/>
</>
    );
}