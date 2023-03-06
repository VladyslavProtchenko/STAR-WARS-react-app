import { Link } from "react-router-dom";

const Posters = () => {
    return (
        <ul className='flex flex-wrap  w-1/2'>
            <Link to='movie/1'className="bg-[url('https://m.media-amazon.com/images/I/51yHBMzxszL._AC_SY580_.jpg')] h-1/2 w-1/3 bg-cover hover:scale-105 transition-all"></Link>
            <Link to='movie/2'className="bg-[url('https://i.scdn.co/image/ab67616d0000b273364ff54db30502c9958e57b0')] h-1/2 w-1/3 bg-cover hover:scale-105 transition-all"></Link>
            <Link to='movie/3'className="bg-[url('https://i.kym-cdn.com/entries/icons/original/000/022/048/Revenge_of_the_Sith.jpg')] h-1/2 w-1/3 bg-cover hover:scale-105 transition-all"></Link>
            <Link to='movie/4'className="bg-[url('https://flxt.tmsimg.com/assets/p4407_p_v12_ab.jpg')] h-1/2 w-1/3 bg-cover hover:scale-105 transition-all"></Link>
            <Link to='movie/5'className="bg-[url('https://resizing.flixster.com/ZhmOdJlHnXyWsqwgC6aktt1CN_I=/300x300/v2/https://flxt.tmsimg.com/assets/p8884_v_h9_ao.jpg')] h-1/2 w-1/3 bg-cover hover:scale-105 transition-all"></Link>
            <Link to='movie/6'className="bg-[url('https://m.media-amazon.com/images/I/51P3dGgy2DL._SY1000_.jpg')] h-1/2 w-1/3 bg-cover hover:scale-105 transition-all"></Link>
        </ul>
    );
}
export {Posters};