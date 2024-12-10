const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:5173'
//   }));


      const videos=[
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",ThumbName:'Bulbuli|Coke Studio Bangla Season One|Ritu Raj X Nandita',CName:'Coke Studio Bangla',views:'1.5M views 2 days ago'},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",ThumbName:'Infinix Note 12: AMOLED Helio G88 SoC!',CName:'ATC Andriod ToTo Company',views:'1.5Mviews 2 days ago'},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",ThumbName:'My first UX Design case study - This got me my first job.',CName:'Saptarshi Prakash',views:'4.8K views 1 years ago'},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",ThumbName:'My Mix',CName:'Lopamudra Mitra, Anupam Roy, and more'},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",ThumbName:'UX Design - What is it? (From AJ &Smart)',CName:'AJ&Smar',views:'150K views 3 years ago'},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",ThumbName:'Mix - Mombati | Mohon Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika',CName:'Mohon Sharif, Odd Signature, Shayan Chowdhury Armob, and more'},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",ThumbName:'| 48 VISA-FREE',CName:'Nadir On The Go',views:'1.7M views 1 years ago'},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",image2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",ThumbName:'14 Advanced Tips to Design FASTER in Figma',CName:'Mizko',views:'53K views 1 years ago'},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true"},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true"},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true"},
        {image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true"}
      ]

      

      app.get("/videos", (req, res) => {
        res.json(videos);
      });


      const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});