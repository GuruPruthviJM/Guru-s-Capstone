import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { FaSearch, FaUser } from "react-icons/fa";
import "../../CSS/NavBar/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "My Tickets", path: "/ticket" },
    { name: "Notifications", path: "/notification" },
    { name: "Payment", path: "/payments" },
    { name: "Buy Subcription", path: "/purchase" },
  ];

  useEffect(() => {
    console.log(searchQuery);
    // if (searchQuery) {
    //   const filteredLinks = navLinks.filter((link) =>
    //     link.name.toLowerCase().includes(searchQuery.toLowerCase())
    //   );
    //   console.log("Search Results:", filteredLinks);
    // }
  }, [searchQuery]);

  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="../../assets/Brillio_Logo.png" alt="Logo" height={40} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="navbarNav">
          <div className="d-flex justify-content-center w-100 my-2 my-lg-0">
            <Form className="d-flex align-items-center position-relative search-container">
              <Form.Control
                type="search"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </Form>
          </div>
          <Nav className="ms-auto d-flex align-items-center">
            {navLinks.map((link, index) => (
              <Nav.Link key={index} href={link.path} className="px-3 highlight-nav-link">
                {link.name}
              </Nav.Link>
            ))}
            <Nav.Link href="/login" className="highlight-nav-link">
              <FaUser className="me-1 highlight-nav-link" /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
