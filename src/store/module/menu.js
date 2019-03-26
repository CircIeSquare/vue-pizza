const state={
     //设置属性
     menuItems:{},
};

const getters={
    //获取属性的状态
    getMenuItems:(state)=>{
        state.menuItems;        
    },
};

const actions={

};

const mutations={
        //改变属性的状态
        setMenuItems(state,data){
            state.menuItems=data;
        },
        //将匹配到的数组在menuItems数组中删除
        removeMenuItems(state,item){
            state.menuItems.forEach((item,index)=> {
               if(item==data){
                   state.menuItems.splice(index,1);
               } 
            });
        },
        //将新添加的pizza push到menuItems属性中
        pushToMenuItems(state,data){
            state.menuItems.push(data);
        },
};

export default{
    state,
    getters,
    actions,
    mutations
}
