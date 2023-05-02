import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    const path = window.location.pathname
    return (
        <Link to = "/" className="nav">
                               
            <ul>
                <CustomLink to ="/Home">Home</CustomLink>
                <CustomLink to ="/Courses">Courses</CustomLink>
                <CustomLink to ="/Encyclopedia">Encyclopedia</CustomLink>
                <CustomLink to ="/BookSales">Book Sales</CustomLink>
                <CustomLink to ="/Resources">Resources</CustomLink>
                                
            </ul>
            
         </Link>
                     
               
    )

  function CustomLink({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    
  return (
    <li className={path === to ? "active": ""}>
     <Link to={to} {...props}>
        {children}
     </Link>
    </li>
   )
  }
}
