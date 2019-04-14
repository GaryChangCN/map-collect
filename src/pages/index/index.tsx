import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'


export default class extends Component {
    config: Config = {
        navigationBarTitleText: '首页'
    }

    render () {
        return (
            <View>
                <Text>
                    Mapmap
                </Text>
            </View>
        )
    }
}
