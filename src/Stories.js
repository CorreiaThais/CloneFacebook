import img_stories from './resources/img_celular.jpg';


export default function(){
    return(
        <div className='stories'>
        <div className='storiesCard' style={{backgroundImage:`url(${img_stories})`}}>
        <p>Nome Sobrenome</p>
        </div>
        <div className='storiesCard' style={{backgroundImage:`url(${img_stories})`}}>
        <p>Nome Sobrenome</p>
        </div>
        <div className='storiesCard' style={{backgroundImage:`url(${img_stories})`}}>
        <p>Nome Sobrenome</p>
        </div>
        <div className='storiesCard' style={{backgroundImage:`url(${img_stories})`}}>
        <p>Nome Sobrenome</p>
        </div>
        <div className='storiesCard' style={{backgroundImage:`url(${img_stories})`}}>
        <p>Nome Sobrenome</p>
        </div>
        </div>
    )
}