import styled from "styled-components";
import { FcCheckmark, FcFullTrash } from "react-icons/fc"; //Componentes Personalizados podem ser estilizados aqui 

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
// pode estilizar outros elementos que estejam dentro do Elemento Pai:
export const ToDoList = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 5px;

ul{
    padding: 0;
    margin-top: 60px;
}

h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    color: gray;

}
`
export const Input = styled.input`
    border: 2px solid #D1D3D466;
    border-radius: 5px;
    height: 40px;
    margin-right: 40px;
    width: 340px;
    outline: none;
    padding: 0px 10px;

`
export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 900;
    line-height: 2px;
    height: 40px;
    border: none;
    color: #ffffff;
    width: 130px;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .6;
    }
`
//Pode-se adicionar JavaScript Na estilização | neste caso tá sendo como uma condição utilizando Strings ${} 
export const ListItem = styled.div`
    background: ${(props) => (props.isfinished ? '#9ad72a' : '#E4E4E4')};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0px 10px;
    width: 500px;

li {
    list-style: none;
}
`



//estilizando componentes personalizados | Para aplicar transformções no elemento :  &:hover {}
export const Trash = styled(FcFullTrash)`
    cursor: pointer;


    &:hover {
        transform: scale(1.5);
        transition: .5s;
    }
`
export const Check = styled(FcCheckmark)`
    cursor: pointer;

    &:hover {
        transform: scale(1.5);
        transition: .5s;
    }
`