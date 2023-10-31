import img1 from"../../img/logo-removebg-preview.png"
export default function Header(){

    return(
        <div className="header">
            <h1 className="Logo"><img src={img1}></img>Farm V</h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}