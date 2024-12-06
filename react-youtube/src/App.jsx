import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function sidebar() {
  const info =[
    {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true' , Text: 'Home'},
    {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true' , Text: 'Explore'},
    {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true' , Text: 'Shorts'},
    {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true' , Text: 'Suscription'},

  ]
  const section1 =[
    {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true' , Text: 'Library'},
    {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true' , Text: 'History'},
    {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true' , Text: 'Yours video'},
    {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true' , Text: 'Watch later'},
    {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true' , Text: 'Liked videos'},
    {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true' , Text: 'Show more'},

  ]
const section2 =[
  {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true' , Text: 'Nadir On The Go'}, 
  {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true' , Text: 'Coke Studio Bangla'},
  {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true' , Text: 'MKBHD'},
  {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true' , Text: 'Figma'},
  {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true' , Text: 'ATTC Android To To..'},
  {image: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true' , Text: 'Alux.com'},

]
const boxes =[
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', Profile: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true',Text: 'Bulbuli|Coke Studio Bangla | Season One|Ritu Raj X Nandita'  ,description: 'Coke Studio Bangla', views: "1.5M views 2 days ago"},
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', Profile: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true',Text: 'Infinix Note 12:       AMOLED    Helio G88 SoC!', views: "42M views 2 days ago",  description: 'ATC Android ToTo Company' ,views: "48K views 1 years ago"},
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', Profile: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true',Text: 'My first UX Design case study - This got me my first job',description: 'Saptarshi Prakash', views: "48K views 1 years ago"  },
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true',Text: 'My Mix'},
]
const boxes1 =[
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true', Profile: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true',Text: 'UX Design - What is it? (From AJ&Smart)'},
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true', Profile: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true',Text: 'Mix - Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika'},
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true', Profile: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true',Text: ' Nadir on the goto| 48 VISA-FREE'},
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true',Text: 'My first UX Design case study - This got me my first job'},
  
]

const boxes2 =[
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true', Profile: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true',Text: 'Bulbuli|Coke Studio Bangla | Season One|Ritu Raj X Nandita'},
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true', Profile: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true',Text: 'Bulbuli|Coke Studio Bangla | Season One|Ritu Raj X Nandita'},
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true', Profile: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true',Text: 'Bulbuli|Coke Studio Bangla | Season One|Ritu Raj X Nandita'},
  {image:  'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true',Text: 'Bulbuli|Coke Studio Bangla | Season One|Ritu Raj X Nandita'},
  
]
  return (
    <>
    <div className='page'>
      <div className='sidebar'>
<div className='head'>
  <div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true' className='hamb'/></div>
  <div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true' className='logo'/></div>
</div>

<div className='info'>
  {info.map((icon,i)=>(
    <div className='icon'>
      <img src ={icon.image} className='ic'/>
      <p className='txt'>{icon.Text}</p>
      </div>
  ))}
</div>

<hr className='line'></hr>
      

      <div className='section1'>
        {section1.map((icon,i)=>(
          <div className='icon'>
          <img src={icon.image} className='ic' />
<p className='txt'>{icon.Text}</p>
        </div>
        ))}
      </div>
      <hr className='line'></hr>

      <h5 className='sus'>SUSCRIPTIONS</h5>
      <div className='section2'>
        {section2.map((icon,i)=>(
          <div className='icon'>
            <img src={icon.image} className='ic'/>
            <p className='txt'>{icon.Text}</p>
            </div>
        ))}
      </div>
      </div>
      <div className="main">
        <div className="header">
          <div className="search"><p className='st'>search </p><div className='small'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true' className='si'/></div></div>
    <div className='mic'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true'/></div>
    <div className="create"><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true'/></div>
    <div className='more'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true'/></div>
    <div className='more'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true'/></div>
    <div className='more'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true'/></div>
        </div>
        <hr className='div'></hr>
        <div className="round">
          <div className="circle">All</div>
          <div className="circle1">cook Studio</div>
          <div className="circle3">UX</div>
          <div className="circle1">case study</div>
          <div className="circle4">music</div>
          <div className="circle5">Bnagla Lofi</div>
          <div className="circle6">Tour</div>
          <div className="circle7">Saintmartin</div>
          <div className="circle8">Tech</div>
          <div className="circle5">iPhone 13</div>
          <div className="circle9">User Interface Design</div>
        </div>
        <hr className='div1'></hr>
        <div className='boxes'>
{boxes.map((box,i)=>(
  <div className='box'>
    <img src ={box.image} className='front'/>
    <div className="descrip">
      <div><img src={box.Profile} className='pr'/></div>
<div className='tion'>{box.Text}</div>
    </div>
    <div className='de'>{box.description} </div>
    <div className='de'>{box.views} </div>
    </div>
))}
        </div>

        <div className='boxes1'>
{boxes1.map((box,i)=>(
  <div className='box'>
    <img src ={box.image} className='front'/>
    <div className="descrip">
      <div><img src={box.Profile} className='pr'/></div>
<div className='tion'>{box.Text}</div>
    </div>
    <div className='de'>{box.description} </div>
    </div>
))}
        </div>
        <div className='boxes2'>
{boxes2.map((box,i)=>(
  <div className='box'>
    <img src ={box.image} className='front'/>
    <div className="descrip">
      <div><img src={box.Profile} className='pr'/></div>
<div className='tion'>{box.Text}</div>
    </div>
  
    </div>
))}
        </div>


      </div>
      </div>
    </>
  )
}

export default sidebar
