import img_avatar from './resources/avatar.jpg';
import { FaVideo } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md"; 

export default function(){
    return(
        <div className='feed'>

            <div className='feedForm'>
            <img src={img_avatar}></img>
            <input type='text' placeholder='No que você está pensando?'></input>
            </div>

            <div className='feedIcons'>
                <div className='iconSingle iconVideo'>
                <FaVideo />
                <span>Video ao vivo</span>
                </div>
                <div className='iconSingle iconImg'>
                <MdInsertPhoto />
                <span>Foto/vídeo</span>
                </div>
                <div className='iconSingle iconEmoji'>
                <MdEmojiEmotions />
                <span>Sentimento/atividade</span>
                </div>
            </div>

        </div>
    )
}