import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container footer-wrapper">
            <p><span dangerouslySetInnerHTML={{"__html": "&copy;"}}/> 2021 Maines Industries for The Odin Project</p>
            </div>
        </footer>
    )
}

export default Footer
