const Title = () => {

    return (
        <article className={box}>
            <div className={image} style={{backgroundImage: "url('https://images.unsplash.com/photo-1521985179118-6008b8cef2c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",backgroundSize:'cover'}}></div>
            <div className={text}>
                <h1 className={title}>STAR WARS</h1>
                СЕРВЕР НУ ООООЧЕНЬ ДОЛГО ДАЕТ ОТВЕТ, ПОЭТОМУ ПРОШУ ПОДОЖДАТЬ ЗАГРУЗКИ
            </div>
        </article>
    );
}

export  {Title};

const box = "flex max-w-7xl min-h-[400px]";
const image = "w-1/2";
const text = "flex  flex-col text-start justify-center px-20 w-1/2";
const title = "font-black text-5xl mb-4";

//https://images.unsplash.com/photo-1521985179118-6008b8cef2c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80