import * as fs from 'fs'
import * as path from 'path'
import { MapImgMeta } from 'src/typings'

const data: MapImgMeta[] = [
    {
        id: 1,
        urlPath: '',
        title: '',
        type: '交通图',
        position: '东半球',
        country: 'self'
    }
]


fs.writeFileSync(path.resolve(__dirname, './db.json'), JSON.stringify(data, null, 4))

// tslint:disable-next-line:no-console
console.log('生成完毕')
