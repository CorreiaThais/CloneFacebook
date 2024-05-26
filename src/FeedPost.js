import img_avatar from './resources/avatar.jpg';
import img_porDoSol from './resources/por-do-sol.avif';

export default function(props){
    return(
        <div className='feedPosts'>

          <div className='feedPostSingle'>
            <div className='feedPost__profile'>
              <img src={img_avatar} />
              <h3>{props.nome}<br/><span>{props.horario}</span></h3>
            </div>

            <div className='feedPost__content'>
              <p>{props.conteudo}</p>
              <img src={img_porDoSol} />
            </div>
          </div>

        </div>

    )
}