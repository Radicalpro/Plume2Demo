/**
 * FlatList组件
 * @author tianyi
 * @since 2017/10/30
 */
import React, {Component} from 'react'
import {FlatList, RefreshControl} from 'react-native'

export default class AJFlatList extends Component {

	static defaultProps = {
		//默认页数
		pageSize: 10,
		//当前的数据
		data: [],
		//传入数组数据的唯一性id
		keyProps: 'id',
		renderRow: null,
		//列表为空是组件
		ListEmptyComponent: null,
		//尾部组件
		ListFooterComponent: null,
		//头部组件
		ListHeaderComponent: null,
		//上拉加载方法
		onEndReached: null,
		//下拉刷新方法
		onRefresh: null,
		//多余的参数，state等变量
		extraData: {},
	};

	constructor(props) {
		super(props);
		const {data} = this.props;
		this.state = {
			refreshing: false,
		}
	}

	render() {
		const {
			data,
			extraData,
			pageSize,
			renderRow,
			ListEmptyComponent,
			ListFooterComponent,
			ListHeaderComponent,
			onEndReached,
			onRefresh,
			keyProps
		} = this.props;

		//如果数据不为空
		return (
			<FlatList
				ref="listRef"
				data={data}
				renderItem={({item, index}) => renderRow(item, index, extraData)}
				//水平或垂直展示
				horizontal={false}
				//初始化渲染行数
				initialNumToRender={pageSize}
				//此函数用于为给定的item生成一个不重复的key
				keyExtractor={(item) => {
					return item[keyProps]
				}}
				//0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
				onEndReachedThreshold={0.3}
				//上拉加载
				onEndReached={onEndReached}
				//底部组件
				ListFooterComponent={ListFooterComponent && ListFooterComponent()}
				//头部组价
				ListHeaderComponent={ListHeaderComponent && ListHeaderComponent()}
				//列表为空组件
				ListEmptyComponent={ListEmptyComponent && ListEmptyComponent()}
				//如果有除data以外的数据用在列表中
				extraData={extraData}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={onRefresh}
					/>
				}
			/>
		)
	}
}
