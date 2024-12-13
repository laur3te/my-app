'use client'

export default function FilmeItemLista({ filme, funcRemoveFilme }){

    function onApagarClick(){
        funcRemoveFilme(filme["show"]["id"])
    }

    return (
        <div className="border my-4 p-4 rounded-md">
            <div className="flex">
                <img src={filme["show"]["image"]["medium"]}
                className="h-32 rounded-md mr-2 my-2"/>
            </div>

            <div>
                <h2 className="text-x1 font-semibold"> 
                    {filme["show"]["name"]}
                </h2>

                <div className="text-sm text-gray-400">
                    {filme["show"]["genres"].join(" | ")}
                </div>

                <p className="text-sm text-gray-600 my-2">
                    {filme["show"]["summary"]}
                </p>

                <button className="bg-purple-500 text-white 
                text-sm px-3 py-2 rounded-lg mt-2" onClick={onApagarClick}>
                    Apagar
                </button>
            </div>
        </div>
    )
}