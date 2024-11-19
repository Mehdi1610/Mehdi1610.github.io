import './styleHomeSection.css'
import { ReactTyped } from "react-typed";

function HomeSection()  {

    return(

        <>
        <section id="home">
            <div className="home-container">
                <h1 className="home-description">Chebbah Mehdi</h1>
                <p className="typed">I'm 
                    <ReactTyped 
                    strings={[
                        "a Software Engineer",
                        "a Full-Stack Developper",
                    ]}
                    typeSpeed={60}
                    backSpeed={60}
                    loop
                        />
                </p>
            </div>
        
        </section>
        
        </>


    );

}

export default HomeSection;