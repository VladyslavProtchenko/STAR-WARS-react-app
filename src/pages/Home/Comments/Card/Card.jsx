const Card = () => {
    return (
            <div className={box}>
                <img src="https://media1.popsugar-assets.com/files/thumbor/bSrzBlO2Pc6EVkDa6wIYmuV48WY/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/11/22/980/n/1922153/8580795c637d4dec5a4826.74829674_/i/robert-downey-jr-bald-head.jpg" alt="comment avatar" className={image}/>
                <div className={info}>
                    <h3 className={name}>Tony stark</h3>
                    <p className={text}>This movie is not shit, but we all know who are the real hero.</p>
                </div>
            </div>
    );
}

export  {Card};

const image = "w-1/4"
const box = 'flex w-1/2 rounded-lg overflow-hidden bg-white shadow-xl'
const info = 'flex flex-col text-left p-5'
const name = 'font-bold text-xl h-1/4'
const text = 'text-sm text-zinc-700 h-2/4 flex items-center px-2'

