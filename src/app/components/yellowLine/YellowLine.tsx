import { CustomInputs } from "../CustomInputs";

export const YellowLine = ({searchData = false}) => {
  return (
    <>
      {
        searchData
          ?
          <div className="h-12 max-w-full bg-customYellow flex-auto">
            <div className="w-full flex justify-end">
              <CustomInputs
                inputSize="lg"
                className="rounded-full mt-1 h-10 pl-4 outline-none text-slate-500"
                placeholder="Buscar"
              />
            </div>
          </div>
          : <div className="h-12 max-w-full bg-customYellow">
            </div>
      }
    </>
  )
}