
const Graph = () => {
  return (
    <section className="mt-10 tablet:flex tablet:justify-between tablet:items-center">
        <div className="w-[20.1779375rem] h-[20.1779375rem] rounded-[50%] border-[3rem] border-solid border-t-[#CDA767] border-r-[#376A49] border-b-[#809A17] border-l-[#698181] flex justify-center items-center -rotate-45">
            <h2 className="text-[2.2rem] text-center text-black font-semibold rotate-45">Amount Saved</h2>
        </div>
        <div className="flex gap-2 mt-8">
            <button className="bg-[#113E21] text-white font-semibold py-2 px-[1.3rem] tablet:px-12 rounded-[1.25rem] text-mid-1Head-clamp">
                Create Vault
            </button>
            <button className="border-2 border-solid border-[#111] font-semibold py-2 px-[1.3rem] tablet:px-12 rounded-[1.25rem] text-mid-1Head-clamp">
                Opt-in Asset
            </button>
        </div>
    </section>
  )
}

export default Graph