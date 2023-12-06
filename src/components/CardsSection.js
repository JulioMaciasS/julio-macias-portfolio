import React from 'react';
import "./CardsSection.css";
import LinkCard from './LinkCard';

export default function CardsSection() {

  return (
    <div className='container-background'>
      <h1>Discover more about my projects!</h1>
    <div className='cards-container'>
        <LinkCard
 imageURL='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F266471.jpg&f=1&nofb=1&ipt=75fd924b0422de25c055ab764e6ccc63217e25b775ee810a4399ecd625ac856a&ipo=images'
 title='JulioTech Guides'   
 hrefLink='https://juliotabj.wixsite.com/juliotechguides'    
 >
        </LinkCard>
        <LinkCard
 imageURL='/images/img-9.jpg'
 title='Card2'   
 hrefLink='https://juliotabj.wixsite.com/juliotechguides'    
 >
        </LinkCard>
        <LinkCard
 imageURL='/images/img-9.jpg'
 title='Card3'   
 hrefLink='https://juliotabj.wixsite.com/juliotechguides'    
 >
        </LinkCard>
        <LinkCard
 imageURL='/images/img-9.jpg'
 title='Card4'   
 hrefLink='https://juliotabj.wixsite.com/juliotechguides'    
 >
        </LinkCard>
        <LinkCard
 imageURL='/images/img-9.jpg'
 title='Card5'   
 hrefLink='https://juliotabj.wixsite.com/juliotechguides'    
 >
        </LinkCard>
    </div>
    </div>
  )
}
