const Social = () => {
    const item= "text-white text-xs hover:underline";
    const hub = "bg-orange-400 px-[2px] rounded-[1px]"

    return (
        <ul className="flex flex-col text-left w-1/3 px-3 justify-center border-l border-gray-600">
            <li className={item}>
                <a href="https://www.instagram.com/vladyslav25cm/" className="link" target="_blank">instagramm</a>
            </li>
            <li className={item}>
                <a href="https://www.linkedin.com/in/vladyslav-protchenko-05844b256/" className="link" target="_blank">linkedIn</a>
            </li>
            <li className={item}>
                <a href="https://www.pornhub.com/" className="font-bold" target="_blank">Porno<span className={hub}>hub</span></a>
            </li>
        </ul>
    )
}

export {Social};