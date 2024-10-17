import '../css/ImageSlider.css'

function ImageSlider() {
    return (
        <>  
            <div className="wrapper">
                <div className="img-container">
                    <img className="img" src="https://github.com/nakul-krishnakumar/image-slider/blob/main/src/assets/3x.png?raw=true" alt="hello" />
                    <img className="img" src="https://raw.githubusercontent.com/nakul-krishnakumar/image-slider/refs/heads/main/src/assets/1a.png" alt="hello" />
                    <img className="img" src="https://github.com/nakul-krishnakumar/image-slider/blob/main/src/assets/1b.png?raw=true" alt="hello" />
                    <img className="img" src="https://github.com/nakul-krishnakumar/image-slider/blob/main/src/assets/BACO.png?raw=true" alt="hello" />
                    <img className="img" src="https://github.com/nakul-krishnakumar/image-slider/blob/main/src/assets/v2.png?raw=true" alt="hello" />
                </div>
            </div>
        </>
    )
}

export default ImageSlider;