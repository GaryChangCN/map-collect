import config from "src/config"
import Taro from "@tarojs/taro"
import { MapImgMeta } from "src/typings"


let mapImgMeta: MapImgMeta[]
export async function getRemoteImgUrl () {
    if (mapImgMeta) {
        return mapImgMeta
    }

    const res = await Taro.request({
        url: `${config.remoteSite}/map-collect/`
    })

    const ret = res.data as MapImgMeta[]
    mapImgMeta = ret
    return ret
}




