import "./css/SlideShow.css";
import {useState} from "react";

const SlideShow = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const importAll = (resource) => { //once u give this all the resources/the directory, it will look into it, you can then turn it into a lsit for us. 
        return resource.keys().map(resource); //this creates an array for us
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$)/ ) // the "false" is the 2nd parameter (we put false since we dont want it to...i forgot), the third parameter is the extentions?
    );

    const showNextImage = () => {
        /* first version
        if(imageIndex == images.length - 1){
            setImageIndex(0);
        }else {
            setImageIndex(imageIndex+1); //reach the end of an array you go back to zero yay :D lol
        }
        */

        // second version! Preferred!
        setImageIndex(imageIndex == images.length -1? 0: imageIndex+1);
    }

    const showPreviousImage = () => {
        setImageIndex(imageIndex == 0? images.length-1:imageIndex-1);
    }

    return (
        <section id="slideshow">
            <img src={images[imageIndex]}/>
            <p>
                <button onClick={showNextImage}>Next</button>
                <button onClick={showPreviousImage}>Previous</button>
            </p>
        </section>
    );
};

export default SlideShow;