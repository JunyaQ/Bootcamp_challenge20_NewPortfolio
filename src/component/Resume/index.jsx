//import react from "react";
import Footer from "../Footer";
import resume from "../../assets/resume.pdf"

function Resume(){
    return(
        <section>
        <h1> Resume</h1>

       <div className="flexwrap">
     <div className="col">

     </div>

    <div className="col">
    </div>
    </div>



        <a href={resume} download="Junya_Qiao_resume.pdf"> Download Here </a>

        <footer className="footer">
        <Footer></Footer>
        </footer>
        </section>

    )
}

export default Resume;