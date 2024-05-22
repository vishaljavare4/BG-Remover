import BGRemoverIcon from '../../assets/BGremover.png'
const Navbar = () => {
    return (
        <>
            <div className="flex p-4 items-center justify-between shadow-xl shadow-slate-100 bg-white">
                <div className='flex items-center'>
                <div className='w-20 h-20'>
                    <img src={BGRemoverIcon} />
                </div>
                <p className='text-2xl text-slate-800 '>SnapStrip</p>
                </div>
                <div className='flex gap-10 text-sm cursor-pointer text-slate-600'>
                    <p className='hover:text-slate-950 transition-all'>Remove Background</p>
                    <p className='hover:text-slate-950 transition-all'>About</p>
                    <p className='hover:text-slate-950 transition-all'>Contact</p>
                </div>
                <p className='rounded-full p-2 text-sm bg-slate-400 text-white hover:bg-slate-500 cursor-pointer transition-all'>VJ</p>
            </div>
        </>
    )
}
export default Navbar;