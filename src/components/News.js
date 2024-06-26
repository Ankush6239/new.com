import React, { Component } from 'react'
import Newsiteam from './Newsiteam'

export class News extends Component {
  artical=[ 
    {
      source: { id: null, name: "Rolling Stone" },
      author: "Brittany Spanos",
      title: "'I Am: Celine Dion': 5 Things We Learned From Harrowing Documentary - Rolling Stone",
      description: "A new Amazon Prime documentary follows the renowned singer as she navigates stiff-person syndrome.",
      url: "http://www.rollingstone.com/music/music-news/i-am-celine-dion-documentary-stiff-person-syndrome-summary-1235046253/",
      urlToImage: "https://www.rollingstone.com/wp-content/uploads/2024/06/i-am-celine-dion-doc.jpg?w=1600&h=900&crop=1",
      publishedAt: "2024-06-25T16:41:53Z",
      content: "The new Amazon Prime documentary I Am: Celine Dion offers a gripping and heartbreaking portrait of one of history’s greatest voices struggling to sing again. Directed by Irene Taylor and streaming no… [+3079 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Sabrina Malhi, Lizette Ortega",
      title: "U.S. surgeon general declares firearm violence a public health crisis - The Washington Post",
      description: "Vivek H. Murthy called on the nation to address gun violence with the vigor used to reduce deaths and injuries from tobacco and motor vehicle crashes.",
      url: "https://www.washingtonpost.com/health/2024/06/26/surgeon-general-firearm-deaths/",
      urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/R6BP5QBA7FC4OONYR5UG6BV5KM.jpg&w=1440",
      publishedAt: "2024-06-25T16:38:22Z",
      content: "U.S. Surgeon General Vivek H. Murthy declared gun violence a public health crisis Tuesday and called on the nation to address it with the same vigor used to reduce deaths and injuries from tobacco and… [+7979 chars]"
    },	
    {	
      source:
{id:	"the-washington-post",
name:	"The Washington Post"},
author:	"Shira Rubin, Claire Parker, Lior Soroka",
title:	"Supreme Court Rules Israel’s Haredi must do compulsory military service - The Washington Post",
description:	"The decision could result in ultra-Orthodox lawmakers pulling out of Prime Minister Benjamin Netanyahu’s coalition and collapsing it.",
url:	"https://www.washingtonpost.com/world/2024/06/25/israel-haredi-ultra-orthodox/",
urlToImage:	"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VNCG5NWOHWFPTD5URWNL27GA7I.jpg&w=1440",
publishedAt:	"2024-06-25T16:08:39Z",
content	:"TEL AVIV Israels Supreme Court ruled unanimously Tuesday that ultra-Orthodox yeshiva students must be conscripted into the Israeli military and are no longer eligible for substantial government benef… [+6823 chars]",
},

{
source:{	
id:	null,
name:	"Yahoo Entertainment"},
author:	"Natalie Rahhal",
title:	"COVID summer guide: How to navigate symptoms, variants and vaccines this season amid rising cases - Yahoo Life",
description:	"Cases have begun to tick up, a sign that the usual summer surge is on its way, experts say.",
url:	"https://www.yahoo.com/lifestyle/covid-summer-guide-how-to-navigate-symptoms-variants-and-vaccines-this-season-amid-rising-cases-200451656.html",
urlToImage:	"https://s.yimg.com/ny/api/res/1.2/tr_CdhgTvju7ZvQN.2H9KQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/59ffbd50-29b0-11ef-a3fd-c1911fe470ad",
publishedAt:	"2024-06-25T16:07:17Z",
content:	"Its summer 2024, but the COVID-19 pandemic is still hanging around. And while the virus continues to evolve, its doing so in more predictable ways. Specifically, the expected summer uptick in infecti… [+7752 chars]",
},
{
source:{	
id:	"the-verge",
name:	"The Verge"},
author:	"Allison Johnson",
title:	"Motorola's 2024 Razr phones are ready to make a splash - The Verge",
description:	"The Motorola Razr and Razr Plus come with some meaningful upgrades this year, including bigger screens, better water resistance, and an updated hinge.",
url:	"https://www.theverge.com/2024/6/25/24185177/motorola-razr-plus-2024-flip-phone-screen-battery-price",
urlToImage:	"https://cdn.vox-cdn.com/thumbor/BZ2f04HdUt7P45mX2XsKFCTi6iI=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25504358/DSCF7856.jpg",
publishedAt:	"2024-06-25T16:00:00Z",
content:	"Motorolas 2024 Razr phones are ready to make a splash\r\nMotorolas 2024 Razr phones are ready to make a splash\r\n / Both phones get upgraded water resistance and bigger cover screens.\r\nByAllison Johnson… [+3686 chars]",
},
{
source:{	
id:	"reuters",
name:	"Reuters"},
author:	"Reuters",
title:	"Police fire on demonstrators trying to storm Kenya parliament, several dead - Reuters",
description:	null,
url:	"https://www.reuters.com/world/africa/young-kenyan-tax-protesters-plan-nationwide-demonstrations-2024-06-25/",
urlToImage:	null,
publishedAt:	"2024-06-25T15:10:00Z",
content:	null,

},
{
source:{
id:	"associated-press",
name:	"Associated Press"},
author:	"JINTAMAS SAKSORNCHAI, ALANNA DURKIN RICHER, ERIC TUCKER"
,title	:"WikiLeaks founder Julian Assange's plane leaves Bangkok on his way to a US court and later freedom - The Associated Press"
,description:	"A plane with WikiLeaks founder Julian Assange has departed Bangkok after refueling and he is on the way to Saipan to enter a plea deal with the U.S. government in Saipan. The agreement will free him and resolve the legal case over the publication of a trove o…"
,url:	"https://apnews.com/article/assange-justice-department-plea-wikileaks-saipan-australia-00eb380879ff636cc9b916f82f82ed40"
,urlToImage:	"https://dims.apnews.com/dims4/default/3d9bd17/2147483647/strip/true/crop/4946x2782+0+256/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fbb%2Fe0%2F6524d6b247ee0f2e1345001246e8%2F089298d4fb854ec387d25e79f1f2a3df"
,publishedAt:	"2024-06-25T15:02:00Z",
content:	"BANGKOK (AP) A plane carrying WikiLeaks founder Julian Assange departed Bangkok after refueling Tuesday, taking him to Saipan to enter a plea deal with the U.S. government that will free him and reso… [+7876 chars]"
,
},

]
  constructor(){
    super();
    this.state={
    artical:this.artical,
    loading:false,
    }
  }
  render() {
    return (
      <div>
        <div className="container">     
          <div className="row ">  
            {this.state.artical.map((element)=>{
              return(
<div className="col-md-4 " key={element.url}>         
        <Newsiteam
        title={element.title}
        description={element.description}
        url={element.urlToImage}
        newurl={element.url}
        />
                </div>
              );
            })
            }
            
        </div>
</div>
      </div>
    )
  }
}

export default News
