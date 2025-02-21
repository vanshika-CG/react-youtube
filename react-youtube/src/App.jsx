import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null); // Store the current video ID

  const API_KEY = 'AIzaSyB6DAyYjJaNKoI0hceuS65-IjHJSLhfDIQ';
  const API_URL = 'https://www.googleapis.com/youtube/v3/search';

  const defaultSearchTerm = "music";

  // Fetch search data based on the query
  const fetchSearchData = async (query) => {
    if (query.trim() === '') return;

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}?part=snippet&q=${query}&key=${API_KEY}&type=video&maxResults=12`
      );
      const result = await response.json();

      if (result.items) {
        const formattedData = result.items.map((item) => ({
          id: item.id.videoId,
          image: item.snippet.thumbnails.medium.url,
          image2: 'https://example.com/path-to-placeholder-image.png',
          ThumbName: item.snippet.title,
          CName: item.snippet.channelTitle,
          views: 'views',
        }));

        setData(formattedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setLoading(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchSearchData(searchQuery); // Ensure searchQuery is passed to the API
  };

  // Fetch default search data on initial load
  useEffect(() => {
    fetchSearchData(defaultSearchTerm);
  }, []);

  // Set the current video ID on thumbnail click
  const ivideo = (videoId) => {
    setCurrentVideoId(videoId); // Update the state with the clicked video's ID
  };

  // Sidebar click handler to update the search query and fetch data
  const handleSidebarClick = (category) => {
    setSearchQuery(category); // Update search query based on category
    fetchSearchData(category); // Fetch videos for that category
  };

  // Close the video player
  const closeVideoPlayer = () => {
    setCurrentVideoId(null); // Hide the video player by setting the video ID to null
  };

  // Handle suggestion click: update search query and fetch data
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);  // Set the search query to the clicked suggestion
    fetchSearchData(suggestion); // Fetch data for the new query
  };

  return (
    <>
      <div className="main">
        <div className='Sidebar'>
          <div className="HomeFeatures">
            <div className="option">
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" className='HomeImg'/></div>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" className='Logo'/></div>
            </div>
            <div className="Home" onClick={() => handleSidebarClick('Home')}>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" className='HomeImg'/></div>
              <div className='HomeText'>Home</div>
            </div>
            <div className="Home" onClick={() => handleSidebarClick('Explore')}>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" className='HomeImg'/></div>
              <div className='HomeText'>Explore</div>
            </div>
            <div className="Home" onClick={() => handleSidebarClick('Shorts')}>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" className='HomeImg'/></div>
              <div className='HomeText'>Shorts</div>
            </div>
            <div className="Home" onClick={() => handleSidebarClick('Subscription')}>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" className='HomeImg'/></div>
              <div className='HomeText'>Subscription</div>
            </div>
            
          </div>

          <div className="VideosFeature">
            <div className="Home" onClick={() => handleSidebarClick('Library')}>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" className='HomeImg'/></div>
              <div className='HomeText'>Library</div>
            </div>
            <div className="Home" onClick={() => handleSidebarClick('History')}>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" className='HomeImg'/></div>
              <div className='HomeText'>History</div>
            </div>
            <div className="Home" onClick={() => handleSidebarClick('Your Videos')}>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" className='HomeImg'/></div>
              <div className='HomeText'>Your videos</div>
            </div>
            <div className="Home" onClick={() => handleSidebarClick('Watch Later')}>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" className='HomeImg'/></div>
              <div className='HomeText'>Watch later</div>
            </div>
            <div className="Home" onClick={() => handleSidebarClick('Liked Videos')}>
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" className='HomeImg'/></div>
              <div className='HomeText'>Liked videos</div>
            </div>

            <div className="Home">
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" className='HomeImg'/></div>
              <div className='HomeText'>Show more</div>
            </div>
          </div>

          <div className="SubscriptionsFeature">
            <div className="Home">
              <div className='SubscriptionText'>Subscriptions</div>
            </div>
            <div className="Home">
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" className='HomeImg' /></div>
              <div className='HomeText'>Nadir On The Go</div>
            </div>
            <div className="Home">
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" className='HomeImg' /></div>
              <div className='HomeText'>Coke Studio Bangla</div>
            </div>
            <div className="Home">
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" className='HomeImg' /></div>
              <div className='HomeText'>MKBHD</div>
            </div>
            <div className="Home">
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" className='HomeImg' /></div>
              <div className='HomeText'>Figma</div>
            </div>
            <div className="Home">
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" className='HomeImg' /></div>
              <div className='HomeText'>ATC Android To To c...</div>
            </div>
            <div className="Home">
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" className='HomeImg' /></div>
              <div className='HomeText'>Alux.com</div>
            </div>
            <div className="Home">
              <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true" className='HomeImg' /></div>
              <div className='HomeText'>ATC Android To To c...</div>
            </div>
          </div>
        </div>

        <div className="Mainmenu">
          <div className="navbar">
            <div className="searchbar">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className="SearchText"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                />
              </form>
            </div>
            {/* Other navbar content */}
          </div>

          <div className="Suggestions">
            <div className='SuggText1'>All</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('Coke Studio')}>Coke Studio</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('UX')}>UX</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('Case Study')}>Case Study</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('Music')}>Music</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('Sports')}>Sports</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('Tour')}>Tour</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('Saintmartin')}>Saintmartin</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('Tech')}>Tech</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('iphone 13')}>iphone 13</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('User Interface Design')}>User Interface Design</div>
            <div className='SuggText' onClick={() => handleSuggestionClick('Computer')}>Computer</div>
            <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true" className='RightArrowImg' /></div>
          </div>

          {/* Video Player */}
          {currentVideoId && (
            <div className="videoPlayer">
              <button onClick={closeVideoPlayer} className="closeButton">X</button>
              <iframe
                src={`https://www.youtube.com/embed/${currentVideoId}`}
                style={{ width: '-webkit-fill-available', height: '-webkit-fill-available', marginTop: '20px', position: 'absolute' }}
                title="Video Player"
              ></iframe>
            </div>
          )}

          <div className="Thumbnails">
            {loading ? (
              <div>Loading...</div>
            ) : (
              data.map((i) => (
                <div key={i.id} className="Thumbnail" onClick={() => ivideo(i.id)}>
                  <div><img src={i.image} alt={i.ThumbName} /></div>
                  <div className="Title">
                    <div><img src={i.image2} alt="Channel" /></div>
                    <div>
                      <div className="TitleText">
                        <div className="ThumbName">{i.ThumbName}</div>
                        <div className="Channel">
                          <div className="CName">{i.CName}</div>
                          <div>
                            <img
                              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
                              alt="Verified"
                              className="verify"
                            />
                          </div>
                        </div>
                        <div className="views">{i.views}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

