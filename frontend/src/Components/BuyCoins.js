import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsArrowDownUp } from 'react-icons/bs'
import usd from '../Assets/svg/USD.svg'

const BuyCoins = ({data,modal,setModal}) => {
    const [coinValue,setCoinValue] = useState(1)
    const [coinUsdPrice,setCoinUsdPrice] = useState(data.market_data.current_price.usd)

    const changeCoinValue = (e) => {
       setCoinValue(e.target.value)
       setCoinUsdPrice((data.market_data.current_price.usd) * e.target.value)
    }

    const changeUsdValue = (e) => {
        setCoinUsdPrice(e.target.value)
        setCoinValue(e.target.value/(data.market_data.current_price.usd))
    }

    const availableBalance = 100000

    const onPlaceOrder = () => {
        if(coinUsdPrice > availableBalance) {
            alert('not enough coins')
            return;
        }
        alert('Coin purchased successfully')
    }
  return (
    //  Large Modal 
    <div className={`${!modal && "hidden" } flex flex-col overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full`} id="large-modal">
        <div className="relative px-4 w-full max-w-4xl h-full md:h-auto">
             {/* Modal content  */}
            <div className="relative  rounded-lg shadow bg-gray-700">
                 {/* Modal header  */}
                <div className="flex justify-between items-center p-5 rounded-t border-b border-gray-600">
                    
                    <h3 className="text-xl font-medium  text-white">
                        Buy {data.name} | {data.symbol.toUpperCase()} 
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="large-modal" onClick={()=> setModal(false)}>
                        <AiOutlineClose  className='w-5 h-5' />
                    </button>
                </div>
                 {/* Modal body  */}
                <div className="p-6"> 

                    <p class="text-base leading-relaxed font-semibold text-gray-200">
                        1 {data.symbol.toUpperCase()} = {data.market_data.current_price.usd} USD 
                    </p>

                    <p class="text-base leading-relaxed font-semibold text-gray-200">
                        Available Balance = 100000 USD
                    </p>

                    <div className="relative py-4">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <img src={data?.image?.small} alt={data.name} className='h-5 w-5' />
                        </div>
                        <input type="number" id='coinValue' name='coinValue'  min="0" value={coinValue} onChange={changeCoinValue} className=" border   text-sm rounded-lg  block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <BsArrowDownUp className='h-4 w-4 text-white m-auto ' />

                    {/* usd value */}
                    <div className="relative py-4">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <img src={usd} alt="usd price" className='h-5 w-5' />
                        </div>
                        <input type="number"  min="0" id='coinUsdValue' name='coinUsdValue' value={coinUsdPrice} onChange={changeUsdValue} className=" border   text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                </div>
                 {/* Modal footer  */}
                <div className="flex justify-center items-center p-6 space-x-2 rounded-b border-t  border-gray-600">
                    <button data-modal-toggle="large-modal" type="button" className="text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" onClick={onPlaceOrder} >
                        Buy {data.name}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuyCoins