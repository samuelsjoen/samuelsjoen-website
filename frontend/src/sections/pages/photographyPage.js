import React, { useState, useEffect } from 'react';

function PhotographyPage() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/portfolio")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched images:", data);
                setImages(data);
            })
            .catch(e => console.log("Error fetching images: ", e));
    }, []);


    return <div className='photographyPage'>
        {images.map((image, index) => (
            <Image
                key={index}
                url={`http://localhost:8080${image}`}
            />
        ))}
    </div>;
}


function Image({url}) {
    return <div className='image'>
        <img src={url} alt="Image" />
    </div>;
}

export default PhotographyPage;