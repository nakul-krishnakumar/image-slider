import '../css/ImageSlider.css'

function ImageSlider() {
    return (
        <>  
            <div className="wrapper">
                <div className="img-container">
                    <img className="img" src="src\assets\3x.png" alt="hello" />
                    <img className="img" src="src\assets\1a.png" alt="hello" />
                    <img className="img" src="src\assets\1b.png" alt="hello" />
                    <img className="img" src="src\assets\BACO.png" alt="hello" />
                    <img className="img" src="src\assets\v2.png" alt="hello" />
                </div>
            </div>
        </>
    )
}

export default ImageSlider;