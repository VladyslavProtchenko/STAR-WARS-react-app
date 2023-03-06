const Search = ({find}) => {
    return (
        <form autoComplete="off" className='flex ' onSubmit={find}>
            <input type="searct" name='search' className="outline-none px-2 pt-1"/>
            <button type="submit"  className='grey text-white uppercase px-2 py-1 active:bg-zinc-900'>Find</button>
        </form>
    );
}

export {Search};