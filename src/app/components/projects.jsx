import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import { CardGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./projects.module.css";
const Projects = () => {
    return(
        <CardGroup>
            
                <Card style={{ width: '18rem' }}>
                    <div className={styles.card}>
                    <Card.Img variant="top" src={"/images/pomodojo.png"} style={{width: "200px" , height: "100px"}}/>
                    <Card.Body>
                        <Card.Title>
                        Pomodojo
                        </Card.Title>
                        <Card.Text>
                        Projeto em Django para promover o Metódo de Estudos Pomodoro
                        </Card.Text>
                        <Link href={"https://github.com/naoehcleber/Pomodojo"}>
                        <Button>Ver</Button>
                        </Link>
                    </Card.Body>
                    </div>
                </Card>
            
            
                <Card style={{ width: '18rem' }}>
                <div className={styles.card}>
                <Card.Img variant="top" src={"/images/placeholder.png"} style={{width: "200px" , height: "100px"}}/>
                    <Card.Body>
                        <Card.Title>
                        PokeBolsa
                        </Card.Title>
                        <Card.Text>
                        Projeto em React e NextJS simulando um mercado de ações com API de PokémonTCG
                        </Card.Text>
                        <Link href={"https://github.com/Vinimtt/Pokebolsa"}>
                        <Button  >Ver</Button>
                        </Link>
                    </Card.Body>
                    </div>
                </Card>
            
            
                <Card style={{ width: '18rem' }}>
                    <div className={styles.card}>
                <Card.Img variant="top" src={"/images/placeholder.png"} style={{width: "200px" , height: "100px"}}/>
                    <Card.Body>
                        <Card.Title>
                        Fórum
                        </Card.Title>
                        <Card.Text>
                        Projeto em React e ExpressJS imitando um fórum de imagens com uso de MongoDB
                        </Card.Text>
                        <Link href={"https://github.com/naoehcleber/Forum"}>
                        <Button  >Ver</Button>
                        </Link>
                    </Card.Body>
                    </div>
                </Card>
            
        </CardGroup>
        
        
    );
}

export default Projects;