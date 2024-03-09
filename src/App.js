import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import vertébrés from './assets/vertébrés.mp4';
import hd from './assets/hd.jpg';

function App() {
  return (
   
  <div>
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ZooTunisia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#vertebres">les vertebres</Nav.Link>
            <Nav.Link href="#invertebres">les invertebres</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                actions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="vertebres">
    


    <Card>
      <Card.Body>les vertebres</Card.Body>
    </Card>
    <p>Les Vertébrés, vivants et fossiles, sont répartis entre sept classes : Agnathes (50 espèces), Chondrichthyens (2 000), Ostéichthyens (20 000), Amphibiens (2 500), Reptiles (7 500), Oiseaux (8 500), Mammifères (3 200). Ces nombres, qui concernent les seules espèces vivantes, sont ceux donnés par Mayr (avec une correction toutefois pour les Chondrichthyens) ; ils n'ont pas tous la même valeur. Ainsi, le monde des Oiseaux étant mieux connu que celui des Poissons, il en résulte que le nombre d'espèces indiqué est plus proche de la réalité pour les premiers que pour les seconds. D'autre part, le traitement de l'espèce n'est pas le même dans les deux cas, le concept d'espèce polytypique étant appliqué aux Oiseaux et celui d'espèce typologique (ou monotypique) aux Poissons</p>
    <img  src="animl.jpg" />
    <p>Mammifères et Oiseaux sont chacun des groupements (taxons) bien définis par un impressionnant ensemble de caractères. Ces taxons sont homogènes si l'on se cantonne, pour les Mammifères, aux animaux vivants et aux fossiles du Tertiaire et d'une grande partie du Secondaire. À l'autre extrémité du phylum, en est-il de même pour ce qu'on appelle communément Poissons ? Jusque vers les années vingt, l'appellation de Poissons s'appliquait</p>
    <video controls>
        <source src={vertébrés} type="video/mp4" />
      </video>

    </div>
    <div className="invertberes">
    <Card>
      <Card.Body>les invertebres</Card.Body>
    </Card>
    <img src={hd} />
    <p>Un invertébré est un animal dépourvu de colonne vertébrale, et d'os en général. Définis par oppositions aux vertébrés, les invertébrés peuvent avoir des plans d'organisations très différents et ne sont plus considérés comme un taxon pertinent</p>
    <p>Différents « embranchements » sont aujourd'hui distingués dans le règne animal. A l'exception des chordés (qui incluent l'ensemble des vertébrés), tous les autres sont composés d' « invertébrés ». Parmi les embranchements les plus connus, citons :

les arthropodes (insectes, crustacés, arachnides, myriapodes), de très loin l'embranchement  qui possède le plus d'espèces et le plus d'individus de tout le règne animal (80 % des espèces connues),
les mollusques (escargots, limaces, bivalves, pieuvres, etc.),
les échinodermes (oursins, étoiles de mer, concombres de mer, etc.),
les cnidaires (coraux, anémones, etc.) et les spongiaires (éponges),
les annélides (vers segmentés : lombrics, sangsues, etc.), les nématodes (vers ronds non segmentés) et les plathelminthes (vers plats).</p>
<video controls style={{}}>
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
   </div>
    );
}

export default App;

