import React, { useState, useEffect } from 'react';

function PhotographyPage() {
    const [images, setImages] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10);

    useEffect(() => {
        fetch("/api/portfolio")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched images:", data);
                setImages(data);
            })
            .catch(e => console.log("Error fetching images: ", e));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100
            ) {
                setVisibleCount((prevCount) => prevCount + 10);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })


    return <div className='photographyPage'>
        {images.slice(0, visibleCount).map((image, index) => (
            <Image
                key={index}
                url={image}
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