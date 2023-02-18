import React, {createContext, useState, useEffect} from 'react';

const api_base = 'https://ytb-app-server.onrender.com/youtubevideo/';

export const vidContext = createContext();

const YoutubeVidContextProvider = (props) =>{

    const [search, setSearch] = useState('')
    const [filteredResults, setFilteredResults] = useState([]);
    const [video, setVideo ] = useState([]);
    const [ title, setTitle ] = useState("");
    const [ vid, setVid ] = useState("");
    const [show,setShow] = useState(false);
    const [ newRate, setNewRate] = useState(0);

    useEffect(() => {
        fetch(api_base).then(response => response.json()).then(response => {
           setVideo(response);
            
    });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            setNewRate
            }}>
            {props.children}
        </vidContext.Provider>
    )
}

export default YoutubeVidContextProvider;