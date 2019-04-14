/** 地图类型 */
export type MapType = '地形图' | '交通图' | '政区图' | '旅游图'


/** 地理信息  哪个半球、哪个周 */
export type MapPosition = '东半球' | '北半球' | '南半球' | '西半球' | '亚洲'


/** 用于标志图片 meta 信息 */
export interface MapImgMeta {
    id: number
    urlPath: string
    title: string
    type: MapType
    position: MapPosition
    /** self 即为 position 本身 */
    country: string | 'self'
}


/** app 的主结构，因为 app 只需要这一个远程配置 */
// export interface AppStruct {}

