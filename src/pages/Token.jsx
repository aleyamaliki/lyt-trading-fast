import { useEffect, useState } from "react"
import TextH1 from "../components/Typography/h1"
import TextSubtitle from "../components/Typography/subtitle"
import TextCaption from "../components/Typography/Caption"
import TextH4 from "../components/Typography/H4"
import TextH3 from "../components/Typography/H3"
import ButtonPrimary from "../components/Button/ButtonPrimary"
import { useBoundStore } from "../store"
import TextH2 from "../components/Typography/H2"
import GraphPrice from "../components/Graph/Price"

const t = {
    "token": {
      "name": "Bonk Inu",
      "symbol": "BONK",
      "mint": "FBFh7c73Z4qKhjDD4sB5mAjji3cB9H6ZsiRTL6EveDpq",
      "uri": "URI",
      "decimals": 9,
      "image": "ImageURL",
      "description": "Token description",
      "extensions": {
        "twitter": "TwitterURL",
        "telegram": "TelegramURL"
      },
      "tags": ["Tag1", "Tag2"],
      "creator": {
        "name": "Creator Name",
        "site": "CreatorWebsite"
      },
      "hasFileMetaData": true
    },
}

const Token = () => {

    const { modal, setModalState } = useBoundStore()

    const [token, setToken] = useState('')

    useEffect(() => {
        if(!token) {
            setToken(t.token)
        }
    }, [token])

    const onHandleClicked = (crypto) => {
        setModalState({ swap: { isOpen: true } });
    }

    return (
        <div className="h-full flex flex-col">
            <div className="flex-shrink-0">
                <TextSubtitle className="mb-2">{token.symbol}</TextSubtitle>
                {/* <TextCaption>{token.mint}</TextCaption> */}
                <TextH1 className="text-primary">{token.name}</TextH1>
                <TextH1 className="">$ 1.40</TextH1>
                <div className="mt-2 flex items-center gap-2">
                    <TextH4>$0.0005 (12.45%)</TextH4> <span className="text-md text-gray-400">Last 1 hour</span>
                </div>
            </div>
            
            <div className="flex-grow overflow-y-auto p-2 h-full">
                <GraphPrice />
            </div>

            <div className="flex-shrink-0">
                {/* <div className="flex justify-between mb-3">
                    <TextH3>Your position</TextH3>
                    <TextH3>100,000</TextH3>
                </div> */}
                <div className="flex">
                    <div className="flex-auto">
                        <div>
                            <TextSubtitle>Today's volume</TextSubtitle>
                        </div>
                        <span>$199,701</span>
                    </div>
                    <div className="flex-auto text-end">
                        <ButtonPrimary text={"Trade"} onClick={onHandleClicked} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token