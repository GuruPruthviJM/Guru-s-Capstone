import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { FaSearch, FaUser } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../CSS/NavBar/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();
  const loggedInUserId = JSON.parse(sessionStorage.getItem("user"))?.user.userName || "default-user";

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!sessionStorage.getItem("user"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [loggedInUserId]);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Define user type based on URL dynamically
  const userTypes = [
    { key: "customer", condition: location.pathname.includes("customers") },
    { key: "employee", condition: location.pathname.includes("employees") },
  ];

  const userType = userTypes.find((type) => type.condition)?.key || "guest";

  // Define navigation links using a Map object
  const navLinksMap = new Map([
    [
      "customer",
      [
        { name: "About Us", path: "/about" },
        { name: "My Tickets", path: `/customers/${loggedInUserId}/tickets` },
        { name: "Notifications", path: "/notification" },
        { name: "Payment", path: `/customers/${loggedInUserId}/payments` },
        { name: "Buy Subscription", path: `/customers/${loggedInUserId}/purchase` },
      ],
    ],
    ["employee", [
        { name: "Colleagues", path: `/employees/${loggedInUserId}/collegue`}
      ]
    ],
    ["guest", []],
  ]);

  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="../../assets/Brillio_Logo.png" alt="Logo" height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" onClick={() => setExpanded(!expanded)} />
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
            {navLinksMap.get(userType).map((link, index) => (
              <Nav.Link key={index} as={Link} to={link.path} className="px-3 highlight-nav-link">
                {link.name}
              </Nav.Link>
            ))}
            {isLoggedIn ? (
              <Nav.Link className="highlight-nav-link" onClick={handleLogout} style={{ cursor: "pointer" }}>
                <FaUser className="me-1 highlight-nav-link" /> Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" className="highlight-nav-link">
                <FaUser className="me-1 highlight-nav-link" /> Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
