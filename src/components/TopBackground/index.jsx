import Users from "../../assets/users (1).png";
import { Background } from "./styles";


function TopBackground() {

    return (
        <Background>
            <img src={Users} alt="imagem-usuarios" />
        </Background>
    )
}

export default TopBackground;