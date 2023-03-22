import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Navbar() {
    const path = window.location.pathname
    return (
        <Link to = "/" className="nav">
            <Link to ="/" className="site-title">
                Rules for Defeating Radicals 
            </Link>
        

            
            <ul>
                <CustomLink to ="/Gallery">Introduction</CustomLink>
                <CustomLink to ="/Characteristics">Characteristics</CustomLink>
                <CustomLink to ="/Dedication">Dedication</CustomLink>
                <CustomLink to ="/Mantras">Mantras</CustomLink>
                <CustomLink to ="/Self1">Self Check 1</CustomLink>
                <CustomLink to ="/Self2">Self Check 2</CustomLink>
                <CustomLink to ="/Community">Community</CustomLink>
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
