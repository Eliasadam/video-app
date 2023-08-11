import React, {createContext, useState, useEffect} from 'react';

const api_base = 'https://ytb-app-server.onrender.com/youtubevideo/';

export const vidContext = createContext();

const YoutubeVidContextProvider = (props) =>{

    const [search, setSearch] = useState('')
    const [filteredResults, setFilteredResults] = useState([]);
    const [video, setVideo ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [ title, setTitle ] = useState("");
    const [ vid, setVid ] = useState("");
    const [show,setShow] = useState(false);
    const [ newRate, setNewRate] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(api_base);
            const json = await response.json();
            setVideo(json);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };

        fetchData();
      }, []);
  

    console.log('This is response', video)
    const inputHanleChange = (searchValue) => {
        setSearch(searchValue);
        if(search !== ''){  
            const filtered = video.filter((vid) => vid.title.toLowerCase().includes(search.toLowerCase())) 
            setFilteredResults(filtered);
        }else{
            setFilteredResults(video);
        }
    }

    const addVideo = async () => {
		const data = await fetch(api_base, {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				title: title,
                rating: newRate,
                url: vid
			})
		}).then(res => res.json());

		setVideo([...video, data]);
	}

    const removeVideo = async (id) => {
        const url = api_base + id
        await fetch(url, {method: 'DELETE'}).then(
        
      () => {
        setVideo(video.filter((val) => {
            
            return val._id !== id;
          })
        );
      }
    );
    }

    return(
        <vidContext.Provider value={{
            search, 
            setSearch, 
            inputHanleChange, 
            video,
            setVideo, 
            addVideo, 
            removeVideo,
            filteredResults,
            title,
            setTitle,
            vid,
            setVid, 
            show, 
            setShow, 
            api_base,
            newRate,
            setNewRate,
            loading,
            error,
            setError,
            setLoading
            }}>
            {props.children}
        </vidContext.Provider>
    )
}

export default YoutubeVidContextProvider;