import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, Outlet } from 'react-router-dom';
import { Container, Nav, Navbar, TabContainer } from 'react-bootstrap';
export default function Dashboard() {
 
    

  return (
    <TabContainer>
{/* //     <div className='container-fluid p-0 m-0 '>
//     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
//   <div className="container-fluid ">
//     <Link className="navbar-brand">EMS</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav" >
//       <ul className="navbarNav nav nav-pills">
//         <li className="nav-item px-2">
//           <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
//         </li>
//         <li className="nav-item px-2">
//         <Link className="nav-link active " aria-current="page" to="/dashboard/employee">Manage Employee</Link>
//         </li>
//         <li className="nav-item px-2">
//         <Link className="nav-link active " aria-current="page" to="/dashboard/category">Category</Link>
//         </li>
//       </ul>
     
//     </div>
//   </div>
// </nav> */}


<Navbar bg="primary" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" >EMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" defaultActiveKey="/" >
          <Nav.Item>
          <Nav.Link as={Link} to="/" eventKey="/"> Home</Nav.Link>
          </Nav.Item>
            <Nav.Item >
            <Nav.Link  as={Link} to="/dashboard/employee" eventKey="/dashboard/employee" >Employee</Nav.Link>
            </Nav.Item>
            <Nav.Item >
            <Nav.Link as={Link} to="/dashboard/category" eventKey="/dashboard/category" >Category</Nav.Link>
            </Nav.Item>
           
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

{/* <div className="p-2 d-flex justify-content-center shadow">
                <h5  className='heading' >Employee Management System</h5>
            </div> */}
            <Container fluid className="d-flex justify-content-center shadow p-2 ">
              <h5>Employee Management System</h5>
            </Container >
 
<Outlet/>



    {/* <div className="footer p-2 d-flex justify-content-center bg-primary position-sticky bottom-0  vw-100">
     <h5 className="text-white">@designed by aditya </h5>
    </div>
    </div> */}
    <Container fluid className='footer p-2 d-flex justify-content-center bg-primary position-sticky bottom-0  '>
    <h5 className="text-white">@designed by aditya </h5>
    </Container>
    
    </TabContainer>
  )
}
